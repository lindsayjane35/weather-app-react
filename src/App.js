import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Los Angeles" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/lindsayjane35"
          target="_blank"
          rel="noreferrer"
        >
          Lindsay Land
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/lindsayjane35/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
