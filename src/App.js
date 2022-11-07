import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description';
import Search from './components/Search';

import { getFormattedWeatherData } from './FetchWeather';

function App() {
  
  var [city,setcity]=useState("mdiq");
  var [data,setdata]=useState({});
  var [loading,setloading]=useState(true);
  var [units,setunits]=useState('metric');



  var getCity=(city)=>{
    setcity(city);
  }

  var setUnits=()=>{
    units==="metric"?
    setunits("imperial"):
    setunits("metric");
  }
  
  useEffect(()=>{
    var getData=async()=>{
      const response=await getFormattedWeatherData(city,units);
      setdata(response);
    }
    getData();
    setTimeout(() => {
      setloading(false);
    }, 1000);
    

  },[city,units]);
  return (
    <div className='App'>
      {
        loading?<h1>loading...</h1>:
        <div> 
          <center><h1 color='red'>Weather App</h1></center>
          <Search 
            unit={units}
            setUnit={setUnits}
            city={(city)=>getCity(city)}
          />
          <Description 
            data={data}
            unit={units}
          />
        </div>
        
      }
      
    </div>
  )
}

export default App;
