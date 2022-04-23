import logo from "./images/logo.jpg";
import "./css/App.css";
import "./css/MainComponent.css";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <button>Dark</button>
          <button>Light</button>
        </div>
      </header>
      <body>
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <p>간장 공장 공장장 강공장장</p>
          <MainComponent />
        </div>
      </body>
    </div>
  );
}

export default App;
