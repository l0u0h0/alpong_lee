import logo from "./images/logo.jpg";
import "./App.css";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>간장 공장 공장장 강공장장</p>
        <MainComponent />
      </header>
    </div>
  );
}

export default App;
