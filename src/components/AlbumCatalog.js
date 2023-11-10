import React, { useEffect, useState } from "react";
import "./AlbumCatalog.css";
import completeLogo from "../assets/img/Isologo.svg";
import SpotifyApiService from "../services/SpotifyApiService";
import Banner from "../components/Banner"
import { useNavigate } from "react-router";

function AlbumCatalog() {
  const [accessToken, setAccessToken] = useState(null);

  const localStorage = window.localStorage;

  useEffect(() => {
    async function getToken() {
      const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
      const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
      const URL = "https://accounts.spotify.com/api/token";

      let body = new URLSearchParams();
      body.append("grant_type", "client_credentials");
      body.append("client_id", CLIENT_ID);
      body.append("client_secret", CLIENT_SECRET);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      };

      try {
        const request = await fetch(URL, options);
        const response = await request.json();

        if (request.ok) {
          setAccessToken(response.access_token);
          localStorage.setItem("access_token", response.access_token);
          setDownloadAlbums(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getToken();
  }, []);

  // Album Catalog Function

  const [albums, setAlbums] = useState([]);
  const [downloadAlbums, setDownloadAlbums] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (downloadAlbums) {
      let spotify = new SpotifyApiService();
      spotify.getNewReleases(accessToken).then((a) => setAlbums(a));
    }
  }, [downloadAlbums]);

  return (
    <div classname="overallPage">
      <div>
        <img className="logoAlbumPage" src={completeLogo} />
      </div>
      <button onClick={() => navigate("/search")}>Search</button>
      <Banner />
      <div className="cards">
        {albums.map((album) => (
          <div key={album.id} className="cardsContent">
            <img className="albumImage" src={album.images[0].url} alt="image" />
            <h2 className="albumTitle">{album.name}</h2>
            <div className="artistNames">
              {album.artists.map((artist) => (
                <h3 key={artist.id} className="artistName">
                  {artist.name}
                </h3>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumCatalog;
