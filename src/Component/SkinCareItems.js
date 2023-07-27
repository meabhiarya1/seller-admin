import React from "react";

const SkinCareItems = (props) =>{
    return (
        <ul>
            <li key={props.id}>
                {props.price}-{props.category}-{props.name}
            </li>
        </ul>
    )
}

export default SkinCareItems