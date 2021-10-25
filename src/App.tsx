import React from "react";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import RootNavigation from "./navigation/RootNavigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RootNavigation />
      </BrowserRouter>
    </div>
  );
};

export default App;
