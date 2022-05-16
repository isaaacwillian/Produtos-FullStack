import { useState } from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
