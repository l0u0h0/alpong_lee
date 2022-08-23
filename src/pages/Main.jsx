import React from "react";
import MainComponent from "../components/MainComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import logo from "../images/beargroup.jpeg";
import logo_before from "../images/logo_before.png";
import header from "../images/header.png";

export default function Main() {
  const thisYear = new Date().getFullYear();
  return (
    <div className="App">
      <Header header={header} />
      <div className="body">
        <div className="App-body">
          <img src={logo_before} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <MainComponent />
        </div>
        <div className="App-body-header"></div>
      </div>
      <Footer thisYear={thisYear} />
    </div>
  );
}
