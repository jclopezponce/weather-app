import React, { useState } from 'react'
import Direction from './Direction';
import WeatherCard from './WeatherCard';
import Header from './Header';



export default function App() {
  const [currentWeather, setCurrentWeather] = useState([]);

  function addWeather(newWeather){
    setCurrentWeather([newWeather])
  }
  
  

  return (
    <div>
    <Header/>
    <div className='carta'>
  <Direction onAdd={addWeather} />
  {currentWeather.map((weatherItem, index)=>(
    <WeatherCard 
  key={index}
  id={index} 
  temperatura={weatherItem.temp}
  location={weatherItem.location}
  humidity={weatherItem.humidity}
  wind={weatherItem.wind}
  precipitation={weatherItem.precipitation}
  description={weatherItem.description}/> 
  ))
}
   </div>
   </div>
  )
}



