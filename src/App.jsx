import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Card";
import bands from "./assets/songs";

export default function App() {
  return (
    <div>
      <h1>Bands</h1>
      <Cards />
    </div>
  );
}
