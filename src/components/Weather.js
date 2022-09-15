import React, {useEffect, useState} from "react";
import { NavBar } from "./NavBar";
import { Card } from "./Card";

export const Weather = () => {

    const [tiempo, setTiempo] = useState("");
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setTiempo(position);

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=
            ${API_KEY}
            `, {
                "method": "GET",
                "headers": {}
            })
                .then(response => response.json())
                .then(data => {
                    const weatherData = data;
                    console.log(weatherData);
                    setWeather(weatherData);
                }).catch(err => {
                    console.log(err);
                    setShow(false);
                    setLoading(true);
                });
        });
    }, [])

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&lang=es';
    let urlCity = "&q=";

    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lang=es';

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");
    const [dias, setDias] = useState("");


    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //Tiempo actual

        urlWeather = urlWeather + urlCity + loc;
        
        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw {response}
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });


        // Pronostico 5 dias

        urlForecast = urlForecast + urlCity + loc;

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);
        
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        // Pronostico diario

        let urlDias = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/?unitGroup=metric&key=LPTVRK5R9P5CXRGMXBTU9BEW3&contentType=json`

        await fetch(urlDias).then((response) => {
            if (!response.ok) throw {response}
            return response.json();
        }).then((diasData) => {
            console.log(diasData);
            setDias(diasData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
        
    }

    return (
        <React.Fragment>
            <NavBar
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
                tiempo = {tiempo}
                dias = {dias}
            />
        </React.Fragment>
    )
}