import "./App.css";
import React, { useState } from "react";

function BandCard({ band }) {
  return (
    <div className="bandCard">
      <h2 className="bandName">name: {band.band_name}</h2>
      <img src={band.band_image}></img>
      <p className="type">type: {band.type}</p>
      <p className="description">{band.description}</p>
      <div className="songs">
        {band.songs.map((songs, index) => {
          return <EachSong key={index} songs={songs} />;
        })}
      </div>
    </div>
  );
}
function EachSong({ songs }) {
  return (
    <>
      <div className="songs">
        <h3 classname="songName">Song Name : {songs.name}</h3>
        <img src={songs.cover_art}></img>
        <div classname="release_date">Release Date: {songs.release_date}</div>
      </div>
    </>
  );
}
export default BandCard;
