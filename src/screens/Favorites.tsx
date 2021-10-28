import React, { useEffect, useState } from "react";
import CurrentConditionItem from "../components/CurrentConditionItem";
import { FAVORITES_LOCALSTORAGE } from "../consts";
import httpWeatherService from "../services/HttpWeatherService";
import { connect } from "react-redux";
import { RootState } from "../store/reducers/root.reducer";
import { City } from "../api/models/City";

interface Props {
  favoriteCities: City[];
}

const Favorites: React.FC<Props> = ({ favoriteCities }) => {
  const [favorites, setFavorites] = useState<any[]>();

  useEffect(() => {
    console.log(favoriteCities)
    httpWeatherService
      .favoritesCondition()
      .then((responses) => setFavorites(responses));
  }, [favoriteCities]);

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <div className="favorite-cities">
        {favorites &&
          favorites.map((city, i) => (
            <CurrentConditionItem
              key={i}
              data={city}
              city={FAVORITES_LOCALSTORAGE[i]}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return {
    favoriteCities: state.favorite.favorites,
  };
};

export default connect(mapStateProps)(Favorites);
