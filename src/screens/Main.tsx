import React from "react";
import SearchCities from "../components/SearchCities";
import Forecasts from "../components/Forecasts";

const Main: React.FC = () => {


  return (
    <div className="main">
      <h1>Main</h1>
      <SearchCities/>
      <Forecasts/>
      </div>
  );
};

export default Main;
