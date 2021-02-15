import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  //run code basded on a given condition runs once if input is emoty and chn ages once input changes 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log('👨', user);
      });
    }
    console.log("I HAVE A TOKEN 👉", token);
  }, [])


  return (
    //bem convetion
    <div className="app">
      {
        token ? (
          <Player />) :
          <Login />
      }

    </div>
  );
}

export default App;
