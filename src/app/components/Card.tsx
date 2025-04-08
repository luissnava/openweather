import { WeatherData } from '../../../types'
import { Card, Typography, CardContent, Box } from '@mui/material'
import Image from 'next/image'
import { useContext } from 'react'
import { FaHeart,  } from 'react-icons/fa'
import { globalContext } from '../context/globalcontext'

const CardWeather = ( {data} : WeatherData) => {


    const kelvinToCelsius = (temp: number) => Math.round(temp - 273.15);
    const tempCelsius = kelvinToCelsius(data.temperature);
    const feelsLike = kelvinToCelsius(data.feels_like);
    const {addFavorites} = useContext(globalContext)

    return (
        <>
            <Card className="w-full bg-gray-900 mt-10">
                <CardContent className="p-4">
                    <Box className="flex justify-end" >
                        <FaHeart onClick={()=> addFavorites(data)} color={data.favorite ? "red" : ""} size={24} className="cursor-pointer" />
                    </Box>
                    {/* Sección de la cabecera */}
                    <Box className="flex flex-col mb-6">
                        <Typography variant="h5" component="h2" className="text-gray-500 font-bold">
                            {data.city}
                        </Typography>
                        <Typography variant="body2" className="text-gray-400">
                            {data.description} · {new Date().toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </Typography>
                        
                    </Box>

                    {/* Sección principal con temperatura actual */}
                    <Box className="flex items-center gap-4 mb-6">
                        {data.icon && (
                            <Image
                                src={data.icon}
                                alt="Icono del clima"
                                width={50}
                                height={50}
                                className="opacity-80"
                            />
                        )}
                        <Typography variant="h2" component="div" className="font-bold text-5xl">
                            {tempCelsius}°
                        </Typography>
                        <Box className="ml-4 flex gap-2">
                            <span className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded-full font-bold">
                                C
                            </span>
                        </Box>
                    </Box>

                    {/* Sección de detalles adicionales */}
                    <Box className="grid grid-cols-2 gap-2 text-sm mb-6">
                        <Typography variant="body2" className="text-gray-400">
                            Máxima {tempCelsius}°
                        </Typography>
                        <Typography variant="body2" className="text-gray-400">
                            Mínima {tempCelsius}°
                        </Typography>
                    </Box>

                    {/* Sección de métricas adicionales */}
                    <Box className="flex flex-col gap-2">
                        <Box className="flex justify-between">
                            <Typography variant="body2" className="text-gray-400">
                                Humedad
                            </Typography>
                            <Typography variant="body2">
                                {data.humidity} %
                            </Typography>
                        </Box>
                        <Box className="flex justify-between">
                            <Typography variant="body2" className="text-gray-400">
                               Sensación Termica
                            </Typography>
                            <Typography variant="body2">
                               {feelsLike} %
                            </Typography>
                        </Box>
                        <Box className="flex justify-between">
                            <Typography variant="body2" className="text-gray-400">
                               Velocidad del viento
                            </Typography>
                            <Typography variant="body2">
                               {data.wind_speed} %
                            </Typography>
                        </Box>
                        
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CardWeather
