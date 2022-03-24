const apiURL = "https://lw-noroff-api.herokuapp.com";
const apiKey = "tOCLBMPb5U6zbvaXbW7PeA==";

export const LoginAPI = {
  checkIfInAPI(username) {
    return fetch(`${apiURL}/translations?username=${username}`)
      .then((response) => response.json())
      .then((results) => {
        // results will be an array of users that match the username of victor.
        if (results.length === 0) {
          return this.login(username);
        } else {
          return results[0];
        }
      })
  },
  login(username) {
    return fetch(`${apiURL}/translations`, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        translations: [],
      }),
    }).then(async (response) => {
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
      return response.json();
    })
    .then(newUser => {
        // newUser is the new user with an id
        return newUser
      })
  },
};
