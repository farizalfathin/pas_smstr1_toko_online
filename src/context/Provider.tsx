import { ReactNode } from "react";
import AuthContextProvider from "./Authentication";
import ThemeContextProvider from "./Theme";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AuthContextProvider>
  );
}
