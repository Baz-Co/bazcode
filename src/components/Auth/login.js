window.onload = async () => {
  await auth0
    .createAuth0Client({
      domain: "dev-r7pa8n4k8hvjzdq8.us.auth0.com",
      clientId: "FokQe67VIujMi3ynlOOAfUvgXf5eN0bD",
      authorizationParams: {
        redirect_uri: `${window.location.origin}/profile`,
      },
    })
    .then(async (auth0Client) => {
      window.aC = auth0Client;
      const isAuthenticated = await auth0Client.isAuthenticated();
      if (isAuthenticated) {
        if(window.location.pathname === "/login/" || window.location.pathname === "/login") {
          window.location.assign(`${window.location.origin}/profile/`);
        }
      } else {
        if(window.location.pathname !== "/login/") {
          window.location.assign(`${window.location.origin}/login/`);
        }
      }
    });
};
