import React from "react"
import './SearchBar.css'
import GroupButton from "./GroupButton"
import { gql } from "apollo-boost";
import magnifyingglass from '../img/magnifyingglass.png'

export default function SearchBar(){
    const [country,setCountry] = React.useState("");

    const countrynames = gql`
        query {
            countries {
                code
                name
                capital
                continent{
                  name
                }
                languages{
                  name
                }
                emoji
                currency
              }
        }
    `;

    function handleChange(e){
        setCountry(e.target.value);
    }

    return(
        <div>
            <img className='glass' src={magnifyingglass}/>
            <input className="searchbar" type='text' onChange={(e) => handleChange(e)}/>
            <GroupButton countrynames={countrynames} country={country}/>
        </div>
    )
}