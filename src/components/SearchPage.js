import React, { useEffect, useState } from "react";
import Header from "./Header";
import SpotifyApiService from "../services/SpotifyApiService";

function SearchPage() {

  const localStorage = window.localStorage;
  const [albums, setAlbums] = useState([]);

  const buscarAlbums = (text) => {
    if (text.length > 5){
    let spotify = new SpotifyApiService()
    let accessToken = localStorage.getItem("access_token")
    spotify.getSearchResults(accessToken, text)
      .then(r => setAlbums(r))
    }
  }

  return (
    <div classname="overallPage">
      <Header onSearchTextChange={buscarAlbums} />
      <div className="cards">
        {/* short-circuit */}
        {albums && albums.map((album) => (
          <div key={album.id} className="cardsContent">
            <img className="albumImage" src={album.images[0].url} alt="image" />
            <h2 className="albumTitle">{album.name}</h2>
            <div className="artistNames">
              {album.artists.map((artist) => (
                <h3 key={artist.id} className="artistName">
                  {artist.name}
                </h3>
              ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
