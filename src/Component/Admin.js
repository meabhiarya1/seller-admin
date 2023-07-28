import React, { useEffect, useState } from 'react';
import Electronics from './Electronics';
import FoodItems from './FoodItems';
import SkinCareItems from './SkinCareItems';
import Button from './Button';

const Admin = () => {
    const [locals, setLocalS] = useState()
    const getLs = () => {
        setLocalS(JSON.parse(localStorage.getItem('data')))

    }
    // getLs()
    //Showing to screen from localStorage

    const lsdata = JSON.parse(localStorage.getItem('data'));

    let arr = lsdata ? lsdata : []

    const [data, setData] = useState({
        id: "",
        price: "",
        name: "",
        category: "Electronics",
    });
    const { id, price, name } = data;

    const handlechange = (e) => {  //Data 
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data)
    }

    const handleadd = (e) => {   /// Adding to LocalStorage
        arr.push(data)
        localStorage.setItem("data", JSON.stringify(arr))
        setData({ ...data, id: "", name: "", price: "" })
        getLs();
    }

    useEffect(() => {
        getLs();
    }, [])

    return (
        <div>
            <input type='number'
                name="id" value={id}
                onChange={handlechange}
                placeholder='Product Id' />

            <input type='number'
                name="price" value={price}
                onChange={handlechange}
                placeholder='Selling Price' />

            <input type='text'
                name="name" value={name}
                onChange={handlechange}
                placeholder='Product Name' />

            <select onChange={(e) => {
                setData({ ...data, category: e.target.value })
                // console.log(data)
            }} >
                <option value={'Electronics'} >Electronics Items</option>
                <option value={'Food'} >Food Items</option>
                <option value={'SkinCare'} >SkinCare Items</option>
            </select>

            <button onClick={handleadd}>Add Product</button>

            <h2>Products</h2><br></br>

            <h3>Electronics Items</h3>

            {arr.filter((el) => (el.category == "Electronics")).map((props, i) => {
                return (
                    <tr>
                        <Electronics {...props}  />
                        <td>
                            <Button id={props.id} getLs={getLs} arr={arr} />
                        </td>
                    </tr>
                )
            })}

            <h3>Food Items</h3>

            {arr.filter((el) => (el.category == "Food")).map((props, i) => {
                return (
                    <tr>
                        <FoodItems {...props} />
                        <td>
                            <Button id={props.id} getLs={getLs} arr={arr} />
                        </td>
                    </tr>
                )
            })}

            <h3>SkinCare Items</h3>

            {arr.filter((el) => (el.category == "SkinCare")).map((props, i) => {
                return (
                    <tr>
                        <SkinCareItems {...props} />
                        <td>
                            <Button id={props.id} getLs={getLs} arr={arr} />
                        </td>
                    </tr>
                )
            })}

        </div>
    )
}

export default Admin