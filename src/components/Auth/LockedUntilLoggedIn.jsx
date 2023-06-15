import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LockedUntilLoggedIn({ children }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated) {
    return (
      <p>
        <button
          class="border-solid border-2  w-20 rounded-md"
          onClick={loginWithRedirect}
        >
          Log in
        </button>{" "}
        to schedule a meeting.
      </p>
    );
  } else {
    return <>{children}</>;
  }
}
