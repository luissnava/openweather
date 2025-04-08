"use client"
import React, { useContext, useState } from 'react'
import { globalContext } from '@/app/context/globalcontext'
import { Button, TextField, Typography, Autocomplete } from '@mui/material'
import CardWeather from '../components/Card'
import { top100Countries } from '../constants'

const WeatherDsiplay = () => {
  const { handleData, weatherData, favorites } = useContext(globalContext)
  const [country, setCountry] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)


  const handleChange = (
    event: React.SyntheticEvent,
    value: string | null
  ) => {
    setCountry(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (!country || country.trim() === "") {
      setMessage("Por favor ingrese un país")
      return;
    }

    if (country) {
      setMessage(null)
      handleData(country)
    }
    return null
  }

  return (
    <div className='w-full'>
      <form className='w-full' onSubmit={handleSubmit}>
        <Autocomplete
          freeSolo
          options={top100Countries.map((option) => option.city)}
          value={country}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              className='w-full'
              {...params}
              label="Ciudad / País"
            />
          )}
        />


        <Button className='w-full' style={{ width: "500px" }} variant="contained" type='submit'>Buscar</Button>
      </form>
      {
        message && <Typography component={'span'} variant='subtitle1' className='text-red-500'>{message}</Typography>
      }

      <div className="w-full mt-24 flex justify-center">

        {
          weatherData ? <CardWeather data={weatherData} /> : null
        }

      </div>

      {
        favorites.length > 0 && <div className="w-full mt-10">

          <Typography variant="h5" component="h2" className="text-gray-500 font-bold">Favoritos</Typography>
          {
            favorites.map((item, index) => {
              return <CardWeather key={index} data={item}></CardWeather>
            })
          }
        </div>
      }



    </div>
  )
}

export default WeatherDsiplay
