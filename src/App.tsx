import { useEffect, useState } from "react"
import Forecast from "./Forecast"
import DisplayData from "./DisplayData"
// import FutureForecast from "./FutureForecast"

function App(){
  const [weatherData, setCurrentWeatherData] = useState()
  const [futureWeatherData, setFutureWeatherData] = useState()
  const [backgroundColour, setBackgroundColour] = useState()
  
  useEffect(() => {
    if (backgroundColour === 1){
      document.body.style.backgroundImage = "linear-gradient(to right, #00b4db, #0083b0)"
    } else if (backgroundColour == 0){
      document.body.style.backgroundImage = "linear-gradient(to right, #141e30, #243b55)" 
    }
    return () => {
      document.body.style.backgroundImage = 'linear-gradient(to right, #00b4db, #0083b0)'
    };
  },[backgroundColour])


  return (
    <>
      <Forecast setCurrentWeatherData={setCurrentWeatherData} setFutureWeatherData={setFutureWeatherData} setBackgroundColour={setBackgroundColour}/>    
      <DisplayData weatherData={weatherData} futureWeatherData={futureWeatherData} />
    </>
  )
}

export default App;