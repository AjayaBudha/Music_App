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
        <h1> wont show anything for some reason</h1>
        {bands.map((band) => {
          <Cards key={band.id} band={band} />;
        })}
      </section>
    </>
  );
}
