import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <a
          href="https://github.com/lindsayjane35/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code by Lindsay Land.
        </a>
      </footer>
    </div>
  );
}

export default App;
