import React from "react"
import './SearchBar.css'
import GroupButton from "./GroupButton"
import { gql } from "apollo-boost";

export default function SearchBar(){
    const [country,setCountry] = React.useState("");

    const countrynames = gql`
        query {
          continent(code:"SA"){
            name
            countries{
                name
                capital
            }
          }
        }
    `;

    function handleChange(e){
        setCountry(e.target.value);
    }

    return(
        <div>
            <input className="searchbar" type='text' onChange={(e) => handleChange(e)} placeholder="enter a country"/>
            <GroupButton countrynames={countrynames}/>
        </div>
    )
}