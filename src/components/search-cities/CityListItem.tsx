import React from "react";
import { City } from "../../api/models/City";

interface Props {
  city: City;
  onCitySelect: (city: City) => void;
}

export const CityListItem: React.FC<Props> = ({ city, onCitySelect }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onCitySelect(city);
    
  };

  return (
    <a
      href=" "
      onClick={handleOnClick}
      className="city-found-name"
      key={city.LocalizedName}
    >
      {city.LocalizedName}
    </a>
  );
};
