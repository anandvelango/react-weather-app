function DisplayData({weatherData, futureWeatherData} : any){
    
  console.log(futureWeatherData)

  return (
      <>
        <div className="weatherData">
        {weatherData && (
            <div>
              <img className="weatherIcon" src={weatherData.weather_icon}></img>
              <div className="weatherPlace"><i className="fa fa-map-marker"></i> {weatherData.city}, {weatherData.country}</div>              
              <div className="belowIconData">
                <div className="tempDiv">{weatherData.temperature}&deg;C</div>
                <div className="timeDiv">{weatherData.time}</div>
                <div className="conditionDiv">{weatherData.condition}</div> 
                <div className="humidityDiv"><i className="bi bi-droplet"></i>Humidity: {weatherData.humidity}%</div> 
                <div className="humidityDiv">Pressure: {weatherData.pressure}hPa</div> 
              </div>
            </div> 
          )
        }
        </div>   
        <div className="futureWeatherData">
          {futureWeatherData && (futureWeatherData.map(data => {
            return( 
            <div className="futureWeather">
              <div className="futureDate">{data.date}</div>
              <img className="futureIcon" src={data.icon}/>
              <div className="futureTemp" >{data.temp}&deg;C</div>
            </div>
            )
          }))}
        </div>
      </> 
      )
} 

export default DisplayData;