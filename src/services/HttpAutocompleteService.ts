import axios from 'axios';
import { API_KEY } from './../consts';

class HttpAutoCompleteService {
    constructor() {}
    
    autoComplete(text: string){
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`)
        .then(results => console.log(results))
        .catch(err => console.log(err))
    }
}

const httpAutoCompleteService = new HttpAutoCompleteService();
export default httpAutoCompleteService