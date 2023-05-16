import "./App.css";
import React, { useState } from "react";
import bands from "./assets/songs";

function Cards() {
  return (
    <>
      <section>
        {bands.map((band) => {
          <SongCard key={band.id} />;
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
}

export default Cards;
