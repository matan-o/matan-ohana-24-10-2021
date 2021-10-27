import axios from "axios";
import { Forecast } from "../api/models/DailyForecast";
import { API_KEY, FAVORITES_LOCALSTORAGE } from "./../consts";

interface ForecastResponse {
  data: Forecast;
}

class HttpWeatherService {
  
  async fiveDayForecasts(
    locationKey: string,
    isMetric?: boolean
  ): Promise<Forecast | null> {
    if (!isMetric || isMetric == null) {
      isMetric = false;
    }
    try {
      const forecast: ForecastResponse = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${isMetric}`
      );
      return forecast.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  currentConditions(locationKey: string) {
    return axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
      )
  }

  favoritesCondition(){
    const responses = FAVORITES_LOCALSTORAGE.map((f: { Key: string; }) => this.currentConditions(f.Key)
    .then(Response => Response.data))
    return Promise.all(responses)
  }

  
}

const httpWeatherService = new HttpWeatherService();
export default httpWeatherService;
