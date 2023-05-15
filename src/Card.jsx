import "./App.css";

import bands from "./assets/songs.json";

function Cards() {
  // return (
  //   <div>
  //     {bands.map((band) => {
  //       <div id="list" key={bands.id}>
  //         <h2>band name: {bands["band_name"]}</h2>
  //         <p> type: {bands["type"]}</p>
  //         <p> description: {band["description"]}</p>
  //       </div>;
  //     })}
  //   </div>
  // );
  return (
    <>
      <div>
        {bands.map((band) => {
          // {
          //   console.log(band.description);
          // }
          <songCard key={band.id} />;
        })}
      </div>
    </>
  );
}

function songCard({ band }) {
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
