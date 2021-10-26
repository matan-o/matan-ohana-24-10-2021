import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import RootNavigation from "./navigation/RootNavigation";
import { RootStore } from "./store/RootStore";

const App: React.FC = () => {
  return (
    <RootStore>
      <BrowserRouter>
        <Header />
        <RootNavigation />
      </BrowserRouter>
    </RootStore>
  );
};

export default App;
