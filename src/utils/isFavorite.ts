import { store } from '../store/RootStore';
import { City } from '../api/models/City';

const isFavorite = (city: (City | undefined | null)): boolean => {
    return store.getState().favorite.favorites.some(c =>c.Key === city?.Key)
    // let arrJson = localStorage.getItem("favoriteCities")
    // let arr = arrJson && JSON.parse(arrJson)
    // if(arr){
    //     return arr.includes(city)
    // }
    // return false
    
}

export default isFavorite;