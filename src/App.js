import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Cheryl Rumbidzai Basopo and is{" "}
          <a
            href="https://github.com/crbasopo/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github {" "}
          </a>
          and is <a href="https://roaring-cranachan-2c55c1.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}
