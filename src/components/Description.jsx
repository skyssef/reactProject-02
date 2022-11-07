import React from "react";
import "./Description.css";

export default function Description(props)  {
  return (
    <div className="weather">
      <div className="top">
        <div>
            <div className="nameInfo">
                <p className="city">{props.data.name}</p>,
                <p className="country">{props.data.country}</p>
            </div>
            <p className="weather-description">{props.data.description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`${props.data.iconURL}`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(props.data.temp)}{props.unit==="metric"?<>°C</>:<>°F</>}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(props.data.feels_like)}{props.unit==="metric"?"°C":"°F"}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{props.data.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{props.data.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{props.data.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};


