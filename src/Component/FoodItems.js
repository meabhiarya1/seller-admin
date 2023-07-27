import React from "react";

const FoodItems = (props) =>{
    return(
        <ul>
            <li key={props.id}>
                {props.price}-{props.category}-{props.name}
            </li>
        </ul>
    )
    
}

export default FoodItems;