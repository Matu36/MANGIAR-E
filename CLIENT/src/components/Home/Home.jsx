import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/searchBar";


export default function Home () {

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
      </div>
        
        );
}
