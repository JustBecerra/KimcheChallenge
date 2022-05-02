import React from "react"
import './GroupButton.css'
import styled from 'styled-components';

export default function GroupButton(props){
    const types = ['Continent', 'Language']
    const [active, setActive] = React.useState(types[0]); 

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
        </>
        
    )
}