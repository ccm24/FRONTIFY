export default class SpotifyApiService {
  async getNewReleases(accessToken) {
    const URL =
      "https://api.spotify.com/v1/browse/new-releases?country=US&limit=30";

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    try {
      const response = await fetch(URL, options);
      const result_1 = await response.json();
      return result_1.albums.items;
    } catch (err) {
      return console.error(err);
    }
  }

  async getSearchResults(accessToken, text) {
    const URL = `https://api.spotify.com/v1/search?q=${text}&type=album%2Cartist`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    try {
      const response = await fetch(URL, options);
      const result_1 = await response.json();
      return result_1.albums.items;
    } catch (err) {
      return console.error(err);
    }
  }
}
