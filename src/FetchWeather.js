import axios from "axios";
import swal from "sweetalert";
const API_KEY = "2ecd2adac7b24ddb2d707a6f59b0728b";

const makeIconURL = (iconId) =>`https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await axios.get(URL)
  .then((res) => res.data)
  .then((data) => data)
  .catch((err)=> swal("invalid city !","","error") );


  const {
    weather,
    main: { temp, feels_like, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description,icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    pressure,
    humidity,
    speed,
    country,
    name
  };
};

export { getFormattedWeatherData };
