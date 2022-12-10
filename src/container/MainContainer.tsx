import React from "react";
import Footer from "../components/common/FooterComponent";
import Header from "../components/common/HeaderComponent";
import logo from "../images/beargroup.jpeg";
import logo_before from "../images/logo_before.png";
import header from "../images/header.png";
import MainComponent from "../components/MainComponent";

const Main = () => {
  const thisYear = new Date().getFullYear();

  return (
    <>
      <Header header={header} />
      <div className="body">
        <div className="App-body">
          <img src={logo_before} alt="logo" className="App-logo" />
          <img src={logo} alt="logo" className="App-logo" />
          <MainComponent />
        </div>
        <div className="App-body-header"></div>
      </div>
      <Footer thisYear={thisYear} />
    </>
  );
};

export default Main;
