import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import FoodRecipe from './FoodRecipe'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import { useState } from 'react'
import jwt_decode from "jwt-decode";
function AppRouting() {
  const Nav = useNavigate()
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    Nav('/login')
    
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {user ? (
      <>
    <li className="nav-item">
      <button onClick={logoutUser}>LOGOUT</button>
      </li>
      </>
    ):(
      <>
      <li className="nav-item">
      <NavLink className="nav-link" to="/WHAT WE OFFER">WHAR WE OFFER</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/login">LOGIN</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/signUp">SIGN UP</NavLink>
      </li>
      </>
    )
}
      
    </ul>
  </div>
</nav>
<Routes>
  <Route path="/signUp" element={<SignUp/>}></Route>
  <Route path="/Home" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/foodRecipe/ingredients/:iid" element={<FoodRecipe/>}></Route>
  
</Routes>
    </>
  )
}

export default AppRouting