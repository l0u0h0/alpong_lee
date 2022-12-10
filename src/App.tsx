import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/common/ErrorComponent";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./container/MainContainer";
import NotFound from "./components/common/NotFoundComponent";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
};

export default App;
