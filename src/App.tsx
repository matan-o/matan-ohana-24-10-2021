import React from "react";
import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import RootNavigation from "./navigation/RootNavigation";
import { RootStore } from "./store/RootStore";

const App: React.FC = () => {
  return (
    <RootStore>
      <HashRouter >
        <Header />
        <RootNavigation />
      </HashRouter>
    </RootStore>
  );
};

export default App;
