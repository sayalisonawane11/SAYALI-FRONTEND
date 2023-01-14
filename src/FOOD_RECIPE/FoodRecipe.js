import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FoodRecipe() {
  const[particularFood, setParticularFood]=useState({})
   const{iid} = useParams()
   useEffect(()=>{
    getParticularFood();
   }, [])
   async function getParticularFood(){
    const food1 = await axios.get(`http://127.0.0.1:8000/food/ingredients/${iid}`)
    //console.log(food1.data)
    setParticularFood(food1.data)
   }
  return (
    <>
    <div>FoodRecipe</div>
    <table className='table table-dark'>
      <thead>
        <tr>
          <th>ITEMS</th>
          <th>AMOUNT</th>
          <th>UNIT</th>
          <th>RECIPE</th>
        </tr>
      </thead>
      <tbody>
        {
          particularFood.map(p=>{
            <tr key={p.ingredients_id}>
              <td>{p.items}</td>
              <td>{p.amount}</td>
              <td>{p.unit}</td>
              <td>{p.recipe}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default FoodRecipe