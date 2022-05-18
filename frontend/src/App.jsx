import { useState } from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
