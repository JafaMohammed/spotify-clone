import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  //run code basded on a given condition runs once if input is emoty and chn ages once input changes 
  useEffect(() => {
    //setToken(_token);
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.getPlaylist("37i9dQZEVXcJjW0I5WqvDe").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
    // console.log("I HAVE A TOKEN 👉", token);
  }, [token, dispatch])

  // console.log('👨', user);
  // console.log('👽', token)
  return (
    //bem convetion
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
