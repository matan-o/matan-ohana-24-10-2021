const getWeatherIcon = (number: number):string =>{
    const iconNumber:string = number < 10 ? `0${number}` : `${number}`
    return `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`
}

export default getWeatherIcon;


