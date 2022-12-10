import React from "react";

const Header = (props: { header: any }) => {
  const header = props.header;
  return (
    <header className="App-header">
      <div className="App-title">
        <img src={header} alt="Header" className="title_img" />
      </div>
    </header>
  );
};

export default Header;
