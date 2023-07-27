import React from "react";
import handledelete from './Admin';

const Button = (props) => {
    let newarr;
    const handledelete = () => {
        newarr = props.arr.filter((e, i) => {
            return e.id !== props.id
        })
        localStorage.setItem("data", JSON.stringify(newarr));
        props.getLs();
    }


    return (
        <button onClick={handledelete} style={{ cursor: 'pointer' }} >
            <b>Delete Product</b>
        </button>
    )
}
export default Button