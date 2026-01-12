const getWindDirection = (degress) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(degress / 45) % 5];
};

const weatherToPolish = {
    'Clear': 'Slonecznie',
    'Clouds': 'Pochmurno',
    'Rain': 'Deszcz',
    'Drizzle': 'Mzawka',
    'Thunderstorm': 'Burza',
    'Snow' : 'Snieg',
    'Mist' : 'Mgla',
    'Fog' : 'Mgla'
};

const weatherToIcon = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌧️',
    'Thunderstorm': '⛈️',
    'Snow' : '❄️',
    'Mist' : '🌫️',
    'Fog' : '🌫️'
}

const getDayName = (date) => {
    const days = ['Niedziela', 'Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota'];
    return days[new Date(date).getDay()];
}

export const transformCurrentWeather = (apiData) =>({
    id: apiData.id,
    miasto: apiData.name.toLowerCase(),
    aktualnaTemperatura: Math.round(apiData.min.temp),
    aktualnaPogoda: weatherToPolish[apiData.weather[0].main] || apiData.weather[0].description,
    aktualnyWiatr: Math.round(apiData.wind.speed * 3.6),
    aktualnyKierunekWiatru: getWindDirection(apiData.wind.deg),
    aktualneZachmurzenie: apiData.cloud.all,
    prognoza5Dni: []
});

export const transformForecast = (forecastData) => {
    const dailyData = {};

    forecastData.list.forEch(item => {
        const data = item.dt_txt.split(' ')[0];
        if(!dailyData[date]){
            dailyData[data] = {
                temps: [],
                weather: item.weather[0].main,
                wind: item.wind.speed,
                windDeg: item.wind.deg,
                clouds: item.clouds.all,
                rain: 0
            };
        }

        dailyDate[date].temps.push(item.main.temp);
        if(item.rain && item.rain['3h']){
            dailyData[date].rain += item.rain['3h'];
        }
    });

    return Object.keys(dailyData).slice(0, 5).map(date => {
        const day = dailyData[date];
        const temps = day.temps;
        return{
            dzien: getDayName(date),
            data: date,
            temperatura: Math.round(Math.max(...temps)),
            temperaturaNoc: Math.round(Math.min(...temps)),
            pogoda: weatherToPolish[day.weather] || day.weather,
            ikona: weatherToIcon[day.weather] || '☀️',
            wiatr: Math.round(day.wind * 3.6),
            kierunekWiatru: getWindDirection(day.windDeg),
            zachmurzenie: day.clouds,
            opadyPrawdopodobienstwo: day.rain > 0 ? Math.min(Math.round(day.rain)) : 0,
            opadyRodzaj: day.rain > 0 ? 'deszcz': null,
            opadyIlosc: Math.round(day.rain)
        };
    });
}
