import {BehaviorSubject} from "rxjs";
import {WeatherImpl} from "../interfaces/WeatherImpl";
import {config} from "../config";
import {ApiService} from "./ApiService";

export class WeatherService {
    private static readonly weatherService = new WeatherService();
    private weatherData = new BehaviorSubject<WeatherImpl>(null);
    public gotWeather = false

    public getWeatherData = () => {
        return this.weatherData;
    }

    public setWeatherData = (weatherdata: WeatherImpl) => {
        this.weatherData.next(weatherdata);
    }

    public getWeatherFromAPI = async (force = false) => {
        if (force || !this.gotWeather) {
            const url = `http://api.openweathermap.org/data/2.5/weather?id=${config.weatherAPI.cityId}&appid=${config.weatherAPI.apiKey}`

            try {
                const result = await new ApiService().get<WeatherImpl>(url);
                this.setWeatherData(result);
            } catch (e) {
                console.error(e);
            }
        }
    }

    public static getInstance() {
        return this.weatherService;
    }
}
