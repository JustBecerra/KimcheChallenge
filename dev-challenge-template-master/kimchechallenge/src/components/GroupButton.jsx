import React from "react"
import './GroupButton.css'
import styled from 'styled-components';
import { useQuery } from "@apollo/react-hooks";
import Country from "./Country.jsx";

export default function GroupButton(props){
    const types = ['Continent', 'Language']
    const [active, setActive] = React.useState(types[0]); 
    const { loading, error, data } = useQuery(props.countrynames);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data.continent)

    const TurnButton = styled.button`
        width:225px;
        height:40px;
        margin-left:95px;
        cursor:pointer;
        background: -moz-linear-gradient(top, rgb(219, 219, 219) 0%, rgb(219, 219, 219) 84%, #6d6d6d 100%);
        background: -webkit-linear-gradient(top, rgb(219, 219, 219) 0%, rgb(219, 219, 219) 84%, #6d6d6d 100%);
        background: linear-gradient(to bottom, rgb(219, 219, 219) 0%, rgb(219, 219, 219) 84%, #6d6d6d 100%);
        border: 1px solid #6d6d6d;
        border-radius: 5px;
        ${({ active }) =>
            active &&
        `
        background: -moz-linear-gradient(top, rgb(219, 219, 219) 0%, rgb(219, 219, 219) 84%, #6d6d6d 100%);
        background: -webkit-linear-gradient(top, rgb(219, 219, 219) 0%, rgb(219, 219, 219) 84%, #6d6d6d 100%);
        background: linear-gradient(to bottom, rgb(38, 131, 253) 0%, rgb(38, 131, 253) 84%, #6d6d6d 100%);
        color:white;
        `}    
    `;

    return(
        <>
            <div className="groups">
                <h1>Group by:</h1>
                {types.map((type) => (
                    <TurnButton
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                    >
                        {type}
                    </TurnButton>
                ))}
            </div>
            {data.continent.countries.map((c) => {
                return(
                    <Country />
                )
            })}
        </>
        
    )
}