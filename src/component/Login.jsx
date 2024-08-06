import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [input,setInput]=useState({
    email:"",
    password:"",
  })

  const handlerActionEmail = (e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const handlerActionPassword = (e)=>{
  setInput({...input,[e.target.name] : e.target.value})
  }
  const handlerSubmitLogIn=(e)=>{
  e.preventDefault()
  const loggedUser = JSON.parse(localStorage.getItem("user"))
  if(input.email === loggedUser.email && 
    input.password === loggedUser.password
  )
  {
    localStorage.setItem("loggedIn" , true)
   navigate("/")
  }
  else{
    alert ('your email and password incoorect')
  }
}
  return (
    <>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <h2>Login</h2>
                  <form onSubmit={handlerSubmitLogIn}>
                    <div className="">
                      <input 
                      name="email"
                      value={input.email}
                      onChange={handlerActionEmail}
                      type="email" />
                      <label htmlFor="form3ExampleLog">Email</label>
                    </div>
                    <div className="">
                      
                      <input
                      type="Password" 
                      name="password" 
                      onChange={handlerActionPassword}

                      value={input.password}/>
                      <label htmlFor="form3ExampleLog">Password</label>
                    </div>
                    <div>
                      <button type="submit" className="">
                        login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
