import axios from "axios";
import { Forecast } from "../api/models/DailyForecast";
import { API_KEY } from "./../consts";

interface ForecastResponse {
  data: Forecast;
}

class HttpWeatherService {
  constructor() {}

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
      console.log(forecast);
      return forecast.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  currentConditions(locationKey: string) {
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
      )
      .then((results) => console.log(results))
      .catch((err) => console.log(err));
  }
}

const httpWeatherService = new HttpWeatherService();
export default httpWeatherService;
