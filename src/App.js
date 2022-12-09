import "./scss/App.scss";
import "./scss/MainComponent.scss";
import "./scss/Footer.scss";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
