import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    const[foodList, setFood]=useState([])
    useEffect(()=>{
        getFoodList()
    }, [])
    async function getFoodList(){
        let obj =await axios.get("http://127.0.0.1:8000/food/recipe/")
        //console.log(obj.data)
        setFood(obj.data)
    }
  return (
    <>
    <h2>LIST OF FOODS </h2>
    <table className='table table-dark'>
        <thead>
            <tr>
                <th>NAME</th>
                <th>DESCRIPTION</th>
                <th>IMAGE</th>
                <th>CREATOR_NAME</th>
            </tr>
        </thead>
        <tbody>
            {
                foodList.map(f=>{
                    return(
                        <tr key={f.recipe_id}>
                            <NavLink to={`/foodRecipe/ingredients/${f.recipe_id}`}>
                            <td>{f.name}</td>
                            </NavLink>
                            <td>{f.desc}</td>
                            <td><img src={f.image}/></td>
                            <td>{f.user}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default Home