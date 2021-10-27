import { City } from "../../api/models/City";
import { StoreAction } from "./StoreAction";

export type favoriteActionType = "FAVORITE_CITY_ADDED" | "FAVORITE_CITY_REMOVED";

export interface FavoriteAction extends StoreAction<favoriteActionType> { }

function favoriteCityAdded(city: City | null): FavoriteAction {
    return {
        type: "FAVORITE_CITY_ADDED",
        payload: {
            city,
        },
    };
}
function favoriteCityRemoved(city: City | null): FavoriteAction {
    return {
        type: "FAVORITE_CITY_REMOVED",
        payload: {
            city,
        },
    };
}


export const favoriteStoreActions = {
    favoriteCityAdded,
    favoriteCityRemoved

};
