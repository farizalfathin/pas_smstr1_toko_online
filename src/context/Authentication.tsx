import { clientSupabase } from "@/utils/supabase";
import { UserType } from "@/types/user";
import { AuthError } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Swal from "sweetalert2";

type AuthContext = {
  user: UserType | null;
  isAuth: boolean;
  onLoginWithPassword: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<{ error: AuthError | null }>;
  onLogout: () => Promise<{ error: AuthError | null }>;
};

const authContext = createContext<AuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const verifyUserId = async (id: string) => {
    try {
      const { data, error } = await clientSupabase
        .from("tbl_users")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Failed to fetch user profile:", error);
        setUser(null);
        return;
      }

      setUser(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const verifyAuthStatus = useCallback(() => {
    const { data: authListener } = clientSupabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session?.user?.id) {
          setIsAuth(true);
          verifyUserId(session.user.id);
        }

        if (event === "SIGNED_OUT") {
          setIsAuth(false);
          setUser(null);
        }
      }
    );

    return authListener;
  }, []);

  useEffect(() => {
    const authListener = verifyAuthStatus();

    return () => authListener.subscription.unsubscribe();
  }, [verifyAuthStatus]);

  const onLoginWithPassword = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const { data, error } = await clientSupabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log(data);
      if (!error) {
        setIsAuth(true);
      }

      return { error };
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const onLogout = async () => {
    try {
      const { error } = await clientSupabase.auth.signOut();

      if (!error) {
        setIsAuth(false);
        setUser(null);
        Swal.fire({
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      return { error };
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <authContext.Provider
      value={{ user, isAuth, onLoginWithPassword, onLogout }}>
      {children}
    </authContext.Provider>
  );
}
