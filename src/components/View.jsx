import Search from "./Search";
export default function View(props){

    
    return(
        <div className="View">
            <Search 
                onClick={props.onClick}
            />
        </div>
    );
}