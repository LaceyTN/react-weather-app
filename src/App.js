import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://peppy-pika-fa046e.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lacey Chaney
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LaceyTN/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
