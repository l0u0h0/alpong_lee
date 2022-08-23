import React from "react";

export default function Header(props) {
  const header = props.header;
  return (
    <header className="App-header">
      <div className="App-title">
        <img src={header} alt="Header" className="title_img" />
      </div>
    </header>
  );
}
