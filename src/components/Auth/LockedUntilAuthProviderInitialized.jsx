import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LockedUntilLoggedIn({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <div>Loading Auth Service...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return <>{children}</>;
}
