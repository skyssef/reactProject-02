import { useState } from "react";

export default function Search(props){
    var [city,setcity]=useState('');

    return(
        <div className="searchBare">
            <input type="text" onChange={(e)=> setcity(e.target.value)}  placeholder="Enter City name...." />
            <button onClick={()=>props.onClick(city)}>Search</button>
        </div>
    );
}