import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store/reducers/root.reducer";
import { weatherStoreActions } from "../../store/actions/weather.actions";
import { City } from "../../api/models/City";
import { CityListItem } from "./CityListItem";

interface Props {
  cities: City[];
  dispatch: any;
}

const SearchCitiesList: React.FC<Props> = ({ cities, dispatch }) => {
  const [display, setDisplay] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDisplay(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDisplay(cities && cities.length > 0);
  }, [cities]);

  const handleCitySelect = (city:City): void=>{
    dispatch(weatherStoreActions.weatherFetchForecastAsync(city))
    setDisplay(false)  
  }

  
  if (!display) return null;

  return (
    <div ref={ref} className="search-cities-list">
      {cities.map((city) => (
        <CityListItem key={city.Key} city={city} onCitySelect={handleCitySelect} />
      ))}
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return {
    cities: state.city.cities,
  };
};

export default connect(mapStateProps)(SearchCitiesList);
