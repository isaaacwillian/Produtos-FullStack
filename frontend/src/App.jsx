import { useState } from "react";
import GlobalStyle from "./styles/global";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Register />
    </div>
  );
}

export default App;
