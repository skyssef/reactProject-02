import './Search.css';

function Search(props) {
    
    return ( 
        <div className="top-level">
            <div className="search-bare">
                <input type="text"  placeholder="City..."/> 
                <button type="button" onClick={(e)=>props.city(e.target.parentNode.firstChild.value)}>Search</button>
            </div>
            <div className="switch">
                Change Unit -
                <button onClick={props.setUnit}>{props.unit==='metric'?"°C":"°F"}</button>
            </div>
        </div>
        
    );
}

export default Search;