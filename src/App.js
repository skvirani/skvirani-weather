import './App.css';
import React, {useEffect, useState} from 'react';
import Weather from './components/weather';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log("RESULT ", result);
      });
    }
    fetchData();
    console.log("lat ", lat);
    console.log("long", long);
    console.log("data ", data);
  }, [lat,long])

  return (
    <div className="App">
      {
      (typeof data.main != 'undefined') 
        ? (<Weather weatherData={data} />) 
        : (<></>)
      }
    </div>
  );
}

export default App;
