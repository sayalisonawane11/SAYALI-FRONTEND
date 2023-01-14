import React, { useEffect } from 'react'
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [loading, setLoading] = useState(true);
    
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
    const loginUser = async (user_id, password) => {
        const response = await fetch("http://127.0.0.1:8000/food/access_token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id,
            password
          })
        });
        const data = await response.json();
    
        if (response.status === 200) {
          setAuthTokens(data);
          setUser(jwt_decode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
          Nav('/home')
        } else {
          alert("Something went wrong!");
        }
        
      }
      const handleSubmit = e => {
        e.preventDefault();
        const user_id = e.target.user_id.value;
        const password = e.target.password.value;
        user_id.length > 0 && loginUser(user_id, password);
  }
  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);
      
      
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
  <div class="form-group">
    <label for="exampleInputEmail1">USER ID</label>
    <input type="email" class="form-control"  placeholder="Enter USER ID"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default Login;