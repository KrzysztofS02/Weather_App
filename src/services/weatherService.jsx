import axios from "axios";
import { API_KEY, API_BASE_URL } from "../config/api";

const weatherApi = axios.create({
    baseURL: API_BASE_URL,
    params:{
        appid: API_BASE_URL,
        unites: 'metric',
        lang: 'pl'
    }
});

export const getCurrentWeather = async(miasto) => {
    const response = await weatherApi.get('/weather',{
        params: {q: miasto}
    });
    return response.data;
}

export const getForect = async(miasto) => {
    const response = await weatherApi.get('/forecast',{
        params: {q: miasto}
    });
    return response.data;
}

export const getWeaherForCities = async(miasta) => {
    const promises = miasta.map(miasto => getCurrentWeather(miasto));
    return Promise.all(promises);
}