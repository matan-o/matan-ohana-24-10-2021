import axios from 'axios';
import { API_KEY } from './../consts';

class HttpWeatherService {

    constructor(){}

    fiveDayForecasts(locationKey: string, isMetric?: boolean) {
        if (!isMetric || isMetric == null) {
            isMetric = false;
        }
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${isMetric}`)
        .then(results => console.log(results))
        .catch(err => console.log(err))
    }

    currentConditions(locationKey: string){
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
        .then(results => console.log(results))
        .catch(err => console.log(err))
    }
}

const httpWeatherService = new HttpWeatherService();
export default httpWeatherService;

