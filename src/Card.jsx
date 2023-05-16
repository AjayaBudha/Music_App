import "./App.css";
import React, { useState } from "react";
import bands from "./assets/songs";
import BandCard from "./Cards";

function Cards() {
  return (
    <>
      {bands.map((band, index) => {
        return <BandCard key={index} band={band} />;
      })}
    </>
  );
}

export default Cards;
