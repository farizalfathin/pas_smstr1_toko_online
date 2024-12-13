import { useAuth } from "@/context/Authentication";
import { ReactNode } from "react";

export default function AuthUserRender({
  AuthenticatedRender,
  UnauthenticatedRender,
}: {
  AuthenticatedRender: ReactNode;
  UnauthenticatedRender: ReactNode;
}) {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <>{AuthenticatedRender}</>;
  }

  return <>{UnauthenticatedRender}</>;
}
