import { useState } from "react"

function Forecast({setCurrentWeatherData, setBackgroundColour, setFutureWeatherData} : any){
    const [city, setCity] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const url = `https://api.weatherapi.com/v1/forecast.json?key=9f6f8adf8b6d45a385485540231510&q=${city}&days=8`
        const response = await fetch(url)
        const json = await response.json()
        getWeatherData(json)
    }

    const getWeatherData = (json: any) => {
      const getDate = new Date(json.location.localtime)
      const options = {
        weekday: 'short', 
        day: '2-digit',   
        month: 'long'     
      }
      
      const formatter = new Intl.DateTimeFormat('en-US', options)
      const date = formatter.format(getDate);
  
      setBackgroundColour(json.current.is_day)
      setCurrentWeatherData(() => {
        return  { 
          city: json.location.name,
          country: json.location.country,
          region: json.location.region,
          time: date,
          temperature: json.current.temp_c,
          condition: json.current.condition.text,
          condition_icon: json.current.condition.icon,
          weather_icon : json.current.condition.icon,
          humidity: json.current.humidity,
          pressure: json.current.pressure_mb,
          is_day: json.current.is_day,
           }  
      })



      setFutureWeatherData(() => {
        const data = [];
        const forecastDays = json.forecast.forecastday;
      
        for (let forecastDay of forecastDays) {
          const dateStr = forecastDay.date;
          const dateObj = new Date(dateStr);
          const options = { weekday: 'short' };
          const weekday = dateObj.toLocaleDateString('en-US', options);
          data.push({date: weekday, temp: forecastDay.day.avgtemp_c, icon: forecastDay.day.condition.icon});
        }

        data.splice(0, 1)

        return data
      })
    } 

    return (
        <form onSubmit={handleSubmit}>
        <div className="searchBar">
        <input className="cityInput" type="text" placeholder="Search city..." onChange={e => setCity(e.target.value)}/>
          <button className="getWeatherButton">
            <img className="searchIcon" src="icons/search.png"></img>
          </button>
        </div>
      </form>
    )
}

export default Forecast;