import React from "react";
import './styles.css';
import { Card } from "semantic-ui-react";
import moment from 'moment';

const Weather = ({weatherData}) => (
    <div className="main">
    <p className="header">{weatherData.name}</p>
    <div>
      <p className="day">Day: {moment().format('dddd')}</p>
    </div>

    <div>
      <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
    </div>
    
</div>
)

export default Weather;