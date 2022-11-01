import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import View from './components/View';

function App() {
  const API="2ecd2adac7b24ddb2d707a6f59b0728b";
  var [city,setcity]=useState("mdiq");
  var [data,setdata]=useState();
  var [err,seterr]=useState("");
  var [loading,setloading]=useState(false);

  var getData=async()=>{
    setloading(true);
    
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
    .then(res=>{
      setdata(res.data);
      setloading(false);
    })
   
    
    
  }
  var getCity=(city)=>{
    setcity(city);
  }
  console.log(data)
  useEffect(()=>{
      getData();
      if(err!==""){ 
        alert(err);
        seterr("");
      }
  },[city,err])
  return (
    <div className='App'>
      {
        loading?<h1>Loading...</h1>:
        <View 
          onClick={(city)=>getCity(city)}
        />
      }
      
    </div>
  )
}

export default App;
