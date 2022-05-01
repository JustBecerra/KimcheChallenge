import React from "react"
import './GroupButton.css'

export default function GroupButton(){
    return(
        <div className="groups">
            <h2>Group by:</h2>
            <button type='button' className="buttons">
                Continent
            </button>
            <button type='button' className="buttons">
                Language
            </button>
        </div>
    )
}