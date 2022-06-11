import logo from "./images/beargroup.jpeg";
import logo_before from "./images/logo_before.png";
import header from "./images/header.png";
import "./css/App.css";
import "./css/MainComponent.css";
import "./css/Footer.css";
import MainComponent from "./components/MainComponent";
import Footer from "./components/FooterComponent";

function App() {
  const thisYear = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <img src={header} alt="Header" />
        </div>
      </header>
      <div className="body">
        <div className="App-body">
          <img src={logo_before} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>간장 공장 공장장 강공장장</p>
          <MainComponent />
        </div>
        <div className="App-body-header"></div>
      </div>
      <Footer thisYear={thisYear} />
    </div>
  );
}

export default App;
