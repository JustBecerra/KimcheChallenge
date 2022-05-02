import React from "react"
import './SearchBar.css'
import GroupButton from "./GroupButton"

export default function SearchBar(){
    const [country,setCountry] = React.useState("");

    function handleChange(e){
        setCountry(e.target.value);
    }

    return(
        <div>
            <input className="searchbar" type='text' onChange={(e) => handleChange(e)} placeholder="enter a country"/>
            <GroupButton country={country}/>
        </div>
    )
}