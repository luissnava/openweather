export interface WeatherData {
    city: string
    temperature: number
    feels_like: number
    humidity: number
    wind_speed: number
    description: string
    icon: string
    favorite: boolean
}

// Definir el tipo para el contexto global
export interface GlobalContext {
    weatherData: WeatherData;
    favorites: WeatherData[]
    setWeatherData: () => void
    addFavorites: (data: WeatherData) => void
    handleData: (country: string) => void
}

export interface Props {
    data: WeatherData
}