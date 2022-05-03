import React from "react"
import './Country.css'

export default function Country(props){
    props.languages[0] === undefined ? console.log(props) : console.log(props.languages[0].name)
    return(
        <div>
            {props.active === "Continent" ? <h1>{props.continent}</h1> : ''}
            {props.active === "Language" && props.languages[0] !== undefined ? <h1>{props.languages[0].name}</h1> : ''}
            <div className="countrycontainer">
                <h2 className="emoji">
                    {props.emoji}
                </h2>
                <h2 className="name">
                    {props.name}
                </h2>
            </div> 
            <h6 className="data">
                Capital: {props.capital}<br/>
                Currency: {props.currency}<br/>
                All Languages: {props.languages !== undefined ? props.languages.map(language => language.name).join(", ") : "No official languages"}
            </h6>       
        </div>
    )
}