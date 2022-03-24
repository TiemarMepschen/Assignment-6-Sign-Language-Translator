const apiURL = "https://lw-noroff-api.herokuapp.com";
const apiKey = "tOCLBMPb5U6zbvaXbW7PeA==";

export const TranslationAPI = {
  updateTranslations(credentials) {
    return fetch(`${apiURL}/translations/${credentials.id}`, {
      method: "PATCH", // NB: Set method to PATCH
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Provide new translations to add to user with id 1
        translations: credentials.translation,
      }),
    })
      .then((response) => {
          if (response.status === 401) {
            throw new Error('INVALID_AUTH_TOKEN')
          }
        else if (!response.ok) {
          throw new Error("Could not update translations history");
        }
        return response.json();
      })
      .then((updatedUser) => {
        // updatedUser is the user with the Patched data
        return updatedUser;
      });
  },
};
