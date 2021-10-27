import React, { useEffect, useState } from "react";
import CurrentConditionItem from "../components/CurrentConditionItem";
import { FAVORITES_LOCALSTORAGE } from "../consts";
import httpWeatherService from "../services/HttpWeatherService";

const Favorites: React.FC = () => {

  const [favorites, setFavorites] = useState<any[]>();
  
  useEffect(() => {
    httpWeatherService.favoritesCondition()
    .then(responses => setFavorites(responses))
  }, []);

  

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <div className="favorite-cities">
        {favorites && favorites.map((city, i) => (
                  <CurrentConditionItem key={i} data={city} cityName={FAVORITES_LOCALSTORAGE[i].LocalizedName} />
        ))
        }
      </div>
    </div>
  );
};

export default Favorites;
