import axios from "axios";
import { dummyAutoCompleteResponse } from "../api/dummyData/autoComplete";
import { City } from "../api/models/City";
import { API_KEY } from "../consts";

interface AutocompleteResponse {
  data: City[];
}

class CityService {
  constructor() {}

  async findCities(term: string): Promise<City[] | null> {
    // try {
    //   const cities: AutocompleteResponse = await axios.get(
    //     `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${term}`
    //   );
    //   console.log(cities);
    //   return cities.data;
    // } catch (error) {
    //   console.error(error);
    //   return null;
    // }
    term = term.toLowerCase();
    return new Promise<City[]>((resolve, reject) => {
      const filtered = dummyAutoCompleteResponse.filter(
        (c) => c.LocalizedName.toLowerCase().indexOf(term) >= 0
      );
      resolve(filtered);
    });
  }
}

const cityService = new CityService();
export default cityService;
