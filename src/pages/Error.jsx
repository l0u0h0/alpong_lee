import React from "react";

const Error = ({ error }) => {
  if (error === undefined) {
    return <div className="App">Unknown Error!</div>;
  }
  return <div className="App">{error.message}</div>;
};

export default Error;
