import "./App.css";
import React, { useState } from "react";
import "./cards.css";

function BandCard({ band }) {
  return (
    <div className="bandCard">
      <h2 className="bandName">name: {band.band_name}</h2>
      <img src={band.band_image} className="bandImage"></img>
      <p className="type">type: {band.type}</p>
      <p className="description">{band.description}</p>
      <div className="allSongs">
        {band.songs.map((songs, index) => {
          return <EachSong key={index} songs={songs} />;
        })}
      </div>
    </div>
  );
}
function EachSong({ songs }) {
  const [isLike, setIsLike] = useState(false);

  const handleLike = (e) => {
    if (isLike) {
      setIsLike((prevState) => (prevState = false));
      e.target.innerText = "Like";
    } else {
      setIsLike((prevState) => (prevState = true));
      e.target.innerText = "Unlike";
    }
    setIsLike(!isLike);
  };
  return (
    <>
      <div className="songs">
        <img src={songs.cover_art} className="songCoverArt"></img>
        <div>
          <h3 className="songName">Song Name : {songs.name}</h3>
          <h4 className="release_date">Release Date: {songs.release_date}</h4>
        </div>
        <button className="likeButton" onClick={handleLike}>
          Like
        </button>
      </div>
    </>
  );
}
export default BandCard;
