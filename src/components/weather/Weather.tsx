import React, {FC, useEffect, useState} from "react";
import {Container, Table} from "reactstrap";
import {WeatherImpl} from "../../interfaces/WeatherImpl";
import {WeatherService} from "../../services/WeatherService";

export const Weather: FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherImpl>(null);
    const kelvinConst = 273.15;

    useEffect(() => {
        WeatherService.getInstance().getWeatherFromAPI();
        const weatherDataSubscription = WeatherService.getInstance().getWeatherData().subscribe(data => setWeatherData(data));

        return () => {
            weatherDataSubscription.unsubscribe();
        }
    }, []);

    return <Container>
        {weatherData ? <div className='margin-top-10'>
            <h1 className='head-text'>WEATHER IN {weatherData.name && weatherData.name.toUpperCase()}</h1>
            <h1 className='head-text'>{(weatherData.main.temp - kelvinConst).toFixed(2)} C</h1>
            <p>{weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main}</p>
            <Table bordered striped>
                <tbody>
                <tr>
                    <th scope="row">Wind</th>
                    <td>{weatherData.wind.speed}</td>
                </tr>
                <tr>
                    <th scope="row">Cloudiness</th>
                    <td>{weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main}</td>
                </tr>
                <tr>
                    <th scope="row">Pressure</th>
                    <td>{weatherData.main.pressure}</td>
                </tr>
                <tr>
                    <th scope="row">Min Temperature</th>
                    <td>{weatherData.main.temp_min}</td>
                </tr>
                <tr>
                    <th scope="row">Max Temperature</th>
                    <td>{weatherData.main.temp_max}</td>
                </tr>
                <tr>
                    <th scope="row">Feels Like</th>
                    <td>{weatherData.main.feels_like - kelvinConst}</td>
                </tr>
                <tr>
                    <th scope="row">Geo Co-Ordinates</th>
                    <td>{`[ ${weatherData.coord.lat}, ${weatherData.coord.lon} ]`}</td>
                </tr>
                </tbody>
            </Table>
        </div> : <h4 className='head-text'>No Weather Data Yet</h4>}
    </Container>
}
