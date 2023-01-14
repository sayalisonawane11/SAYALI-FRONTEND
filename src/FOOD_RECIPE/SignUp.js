import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function SignUp() {
 const Nav= useNavigate()
 const{register, handleSubmit}= useForm()
 function addUser(user){
    //console.log(user)
    axios.post('http://127.0.0.1:8000/food/user/', user)
    Nav('/login')
 }
  return (
    <>
    <form onSubmit={handleSubmit(addUser)}>
      <div className='row'>
      <div className="form-group row">
        <div className='col-sm-10'>
          <input type="text"  placeholder='NAME' {...register("name")}/>
        </div>
        </div>
        <div className="form-group row">
        <div className='col-sm-10'>
          <input type="text" placeholder='USER_ID' {...register("user_id")}/>
        </div>
        </div>
        <div className='col-sm-10'>
          <input type="password"  placeholder='PASSWORD' {...register("password")}/>
        </div>
        <div className="form-group row">
      <div className="col-sm-10">
      <input type="submit" value="LOGIN"/>
    </div>
  </div>
      </div>
    </form>
    </>
  )
}

export default SignUp