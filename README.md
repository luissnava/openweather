# Weather App 🌤️

Esta aplicación permite a los usuarios consultar el clima actual de diferentes ciudades, guardar sus ciudades favoritas y ver información detallada del clima como temperatura, sensación térmica, humedad y velocidad del viento.

## Tecnologías Utilizadas 🛠️

- **Frontend**:
  - React
  - Next.js 15
  - Material UI
  - react-icons
  - TypeScript
  - React Hooks (useState, useEffect)
  - LocalStorage para persistencia de datos

- **API Externa**:
  - OpenWeatherMap API (`https://api.openweathermap.org/data/2.5/weather`)

## Características ✨

- Búsqueda de clima por nombre de ciudad
- Visualización de datos meteorológicos (temperatura, sensación térmica, humedad, velocidad del viento)
- Manejo de favoritos (agregar, eliminar, actualizar)
- Persistencia de datos favoritos usando LocalStorage

## Requisitos Previos 📋

- Node.js (v22 o superior)
- npm o yarn

## Instrucciones de Instalación 🚀

1. Clona el repositorio: 
   ```bash
   git clone 
   cd weather-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto y agrega tu API key de OpenWeatherMap:
   ```
   NEXT_PUBLIC_API_KEY=tu_api_key_aquí
   ```

## Cómo Ejecutar el Proyecto 🏃‍♂️

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

2. Abre tu navegador y navega a:
   ```
   http://localhost:3000
   ```

## API Key de Prueba 🔑

Para pruebas, puedes usar esta API key de OpenWeatherMap:
```
4331a28f89f94ebbc03938bcd82e4b50
```

**Nota**: Esta es una API key de prueba con límites de uso. Para un proyecto en producción, regístrate en [OpenWeatherMap](https://openweathermap.org/api) para obtener tu propia API key.

## Estructura del Proyecto 📁

```
weather-app/
├── app/                 # Rutas y páginas de Next.js
├── components/          # Componentes React reutilizables
├── constants/           # Utilidades
├── containers/          # Contenedores
├── public/              # Archivos estáticos
├── styles/              # Estilos CSS/SCSS
└── types/               # Definiciones de TypeScript
```

## Uso de la API 🌐

La aplicación utiliza la API de OpenWeatherMap para obtener datos meteorológicos. La URL base es:
```
https://api.openweathermap.org/data/2.5/weather
```

Parámetros principales:
- `q`: Nombre de la ciudad
- `appid`: Tu API key
- `lat`: latitud
- `lon`: longitud

Ejemplo de solicitud:
```
https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lonn}&appid=${API_KEY}
```

## Notas de Implementación 📝

### Manejo de Favoritos

La aplicación guarda favoritos en el localStorage utilizando una estructura de datos con los siguientes campos:

```typescript
interface WeatherData {
    city: string
    temperature: number
    feels_like: number
    humidity: number
    wind_speed: number
    description: string
    icon: string
    favorite: boolean
}
```
