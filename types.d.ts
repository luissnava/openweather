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
    favorites: Array[]
    setWeatherData: () => void;
    addFavorites: () => void
    handleData: () => void;
}