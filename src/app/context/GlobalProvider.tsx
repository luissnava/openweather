"use client"
import React, { useEffect, useMemo, useState } from "react";
import { globalContext } from "./globalcontext";
import { apiKey } from "../constants";
import { WeatherData } from "../../../types";
interface GlobalProviderProps {
    children: React.ReactNode
}

const GlobalProviderState = ({ children }: GlobalProviderProps) => {

    const [weatherData, setWeatherData] = useState<WeatherData[]>()
    const [favorites, setFavorites] = useState<WeatherData[]>([])
    
    useEffect(() => {
        const localFavorites = localStorage.getItem('favorites');
    
        // Si hay datos almacenados, convertirlos de JSON a objeto
        if (localFavorites) {
           const favoritesStore = JSON.parse(localFavorites);
           setFavorites(favoritesStore)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleData = async (country: string) => {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=1&appid=${apiKey}`);

            if (!response.ok) {
                throw new Error("Error al consultar el país");
            }
            const data = await response.json();


            if (data[0]) {
                const { lat, lon } = data[0]
                const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
                if (!responseWeather.ok) throw new Error("Error en la segunda petición");

                const dataweather = await responseWeather.json();

                const urlImage = `https://openweathermap.org/img/wn/${dataweather.weather[0].icon}@2x.png`
                setWeatherData(

                    {
                        city: data[0].name,
                        temperature: dataweather.main.temp,
                        feels_like: dataweather.main.feels_like,
                        humidity: dataweather.main.humidity,
                        wind_speed: dataweather.wind.speed,
                        description: dataweather.weather[0].description,
                        icon: urlImage,
                        favorite: false

                    }
                )


            }

        } catch (error) {
            console.error("Error al consultar el clima:", error);
        }
    };


    const addFavorites = (data: WeatherData) => {
        setWeatherData({ ...data, favorite: !data.favorite })

        setFavorites(prevFavorites => {

            const city = prevFavorites.some(item => item.city === data.city);

            if (city) {
                return prevFavorites.map(item =>
                    item.city === data.city
                        ? { ...item, favorite: !item.favorite }
                        : item
                );
            } else {

                return [...prevFavorites, { ...data, favorite: true }];
            }
        });
    };


    return (
        <globalContext.Provider value={{handleData,addFavorites,weatherData,favorites}}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalProviderState