window.onload = async () => {
  if (!window.aC) {
    auth0
      .createAuth0Client({
        domain: "dev-r7pa8n4k8hvjzdq8.us.auth0.com",
        clientId: "FokQe67VIujMi3ynlOOAfUvgXf5eN0bD",
        authorizationParams: {
          redirect_uri: `${window.location.origin}/profile`,
        },
      })
      .then(async (auth0Client) => {
        if (
          location.search.includes("state=") &&
          (location.search.includes("code=") ||
            location.search.includes("error="))
        ) {
          await auth0Client.handleRedirectCallback();
          window.history.replaceState({}, document.title, "/profile");
        }
        window.aC = auth0Client;
        const isAuthenticated = await auth0Client.isAuthenticated();
        if (isAuthenticated) {
          const userProfile = await auth0Client.getUser();
          const loggedInElement = document.getElementById("loggedIn");
          loggedInElement.hidden = false;
          const profileElement = document.getElementById("profile");
          profileElement.hidden = false;
          profileElement.innerHTML = `
                <p>${userProfile.name}</p>
                <img class="place-self-center mx-auto" src="${userProfile.picture}" />
              `;
        } else {
          window.location.assign(`${window.location.origin}/login/`);
        }
      });
  }

  // console.log(window.aC)
};
