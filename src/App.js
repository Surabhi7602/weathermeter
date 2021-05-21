import React, { useState} from 'react';


const api = {
  key : "24632732eb9a833f013d856c333f40eb",
  base: "http://api.openweathermap.org/data/2.5/"
}


function App() {

  const[query, setQuery] = useState('');
  const[weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }

  }

  return (
    <div className= {(typeof weather.main != "undefined")?((weather.main['temp'] > 18) ? "app-warm" : "app-cold"):"app-und"}>
      <main>
        <div className="search-box">
          
          <input type = "text" className="search-bar" placeholder = "Enter the name of a city..."
            onChange = {e => setQuery(e.target.value)}
            value = {query}
            onKeyPress = {search}
          >
      
          </input>
          
        </div>
        {(typeof weather.main != "undefined")? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys['country']}</div>
            
          </div>
          <div className="weather-box">
            <div className="temp">
              {weather.main['temp']}°C 
            </div>
            <div className="weather">
              {weather.weather[0]['description']}
            </div>
          </div>
        </div>
        ) : (' ')}
      </main>
    </div>
  );
}

export default App;
