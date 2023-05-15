import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Card";
import bands from "./assets/songs";

export default function App() {
  return (
    <>
      <section>
        {bands.map((band) => {
          <Cards key={band.id} band={band} />;
        })}
      </section>
    </>
  );
}

function SongCard({ band }) {
  return (
    <div className="bandCard">
      <h2 className="bandName">{band.name}</h2>
      <img src={band.band_image}></img>
      <p className="type">{band.type}</p>
      <p className="description">{band.description}</p>
      <div className="songs">
        {band.songs.map((song) => {
          <div key={song.name} className="songs">
            <h3 classname="songName">{song.name}</h3>
            <img src={song.cover_art}></img>
            <div classname="release_date">{song.release_date}</div>
          </div>;
        })}
      </div>
    </div>
  );

  // function MyButton() {
  //   return <button>I'm a button</button>;
  // }
}
