import axios from "axios";
import { City } from "../api/models/City";
import { API_KEY, BASE_API_URL } from "../consts";

interface AutocompleteResponse {
  data: City[];
}

class CityService {
  async findCities(term: string): Promise<City[] | null> {
    try {
      const cities: AutocompleteResponse = await axios.get(
        `${BASE_API_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${term}`
      );
      console.log(cities);
      return cities.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const cityService = new CityService();
export default cityService;
