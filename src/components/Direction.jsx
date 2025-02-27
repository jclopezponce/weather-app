import React, { useState, useEffect } from "react"
import Autocomplete  from "react-google-autocomplete";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import weatherInterp from "../weatherCode";
import Button from '@mui/material/Button';


export default function Direction(props) {  
  
    const [weather, setWeather] = useState({
      location : "",
      temp : "" ,
      description: "",
      humidity : "",
      wind : "",
      precipitation : ""
});

 const apiKey = import.meta.env.VITE_PLACES_API_KEY;

 async function getDirection (place) {
  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
    try {
      const response = await axios.get(import.meta.env.VITE_WEATHER_URL,{
        params: {
          latitude : lat,
          longitude : lng,
          current : "temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code",
          daily : "precipitation_probability_max",
          hourly : "precipitation_probability",

        }
      } );
      const current = response.data.current;
      const weatherArray = weatherInterp.find(({code}) => code === current.weather_code );
      const weatherDescription= weatherArray.description;
      
      let precip =  response.data.hourly.precipitation_probability;
      const calculateAverage =  arr => arr.reduce((sum, value) => sum + value, 0) / arr.length;
      let precipAverage = Math.floor(calculateAverage(precip));
    setWeather({
      location : place.address_components[0].long_name,
      temp : current.temperature_2m,
      description : weatherDescription,
      humidity : current.relative_humidity_2m,
      wind : Math.floor(current.wind_speed_10m), 
      precipitation : precipAverage,
    });
    }
    catch (error) {
      console.error(error);
    }
}
function addTemp(){ 
    console.log(weather.location);
    props.onAdd(weather);
}

 return (
  <div className="searcher">
    <Autocomplete
    required
    apiKey={apiKey}
    onPlaceSelected={getDirection}
    onFocus={e => e.target.select()}
    placeholder="SEARCH"
    />

    <Button variant="contained" style={{backgroundColor: "#A3D1C6"}}onClick={addTemp}><SearchIcon/></Button>
    </div>
 )

}