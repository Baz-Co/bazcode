import React, { useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import LockedUntilAuthProviderInitialized from "./LockedUntilAuthProviderInitialized.jsx";
import LockedUntilLoggedIn from "./LockedUntilLoggedIn.jsx";

export default function AuthScheduler() {
  return (
    <Auth0Provider
      domain="dev-r7pa8n4k8hvjzdq8.us.auth0.com"
      clientId="FokQe67VIujMi3ynlOOAfUvgXf5eN0bD"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/schedule`,
      }}
    >
      <LockedUntilAuthProviderInitialized>
        <CalComComponent />
      </LockedUntilAuthProviderInitialized>
    </Auth0Provider>
  );
}

export function CalComComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <LockedUntilLoggedIn>
        <Cal
          calLink="bazco/15min"
          style={{ width: "100%", height: "100%", overflow: "scroll", marginTop: '8px' }}
        />
    </LockedUntilLoggedIn>
  );
}
