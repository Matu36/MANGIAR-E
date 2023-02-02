import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/searchBar";
import { healthyTips } from "../healthyTips/healthyTips";



export default function Home () {


    const randomTip = () => {
    var myArray = healthyTips;
    var rand = Math.floor(Math.random()*myArray.length);
    var rValue = myArray[rand];
    return rValue;
    }

    const handleClick = (e) => {  // Cargar Países
        e.preventDefault();
        //setLoader(true);
        //dispatch(traertodas lasrecetas());
        //dispatch(setCurrentPage(1));
        //timer(500);
      };

    return (
        <div className>
      <NavBar handleClick= {handleClick} />
      <SearchBar />
<br />
<br />


<div className="Tip del día">
    <h4>Tip del Día</h4>
    <p>{randomTip()}</p>
    
    


</div>



      </div>
        
        );
}
