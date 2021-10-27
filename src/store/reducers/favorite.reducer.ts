import { FAVORITES_LOCALSTORAGE } from '../../consts';
import { City } from './../../api/models/City';
import { FavoriteAction } from './../actions/favorite.actions';

export interface FavoriteState {
    favorites: City[];
}

const loadInitialState = () => {
    const favorites = FAVORITES_LOCALSTORAGE;
     return favorites && favorites
    
}

const initialState: FavoriteState = {
    favorites: loadInitialState() || []
};

export function favoriteReducer(
    state = initialState,
    action: FavoriteAction
): FavoriteState {
    switch (action.type) {
        case "FAVORITE_CITY_ADDED":
            if (!state.favorites.includes(action.payload.city)) {
                localStorage.setItem("favoriteCities", JSON.stringify([...state.favorites, action.payload.city]))
            }
            return {
                ...state.favorites,
                favorites: [...state.favorites, action.payload.city]
            };
        case "FAVORITE_CITY_REMOVED":
            const newState: City[] = state.favorites.filter(city => city.Key !== action.payload.city.Key)
            localStorage.setItem("favoriteCities", JSON.stringify(newState))
            return { ...state, favorites: newState }

        default:
            return state;
    }
}
