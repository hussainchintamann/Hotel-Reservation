import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
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
      <div className="mask d-flex mt-5 align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card"style={{borderRadius:'15px'}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>
                  <form onSubmit={handlerSubmitLogIn}>
                    <div className="form-outline mb-4">
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog">Email</label>
                      <input 
                      name="email"
                      value={input.email}
                      onChange={handlerActionEmail}
                      type="email" 
                      className="form-control" />
                      
                     
                    </div>
                    <div className="">
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog">Password</label>
                      <input
                      
                      type="Password" 
                      name="password" 
                      onChange={handlerActionPassword}
                      className="form-control" 
                      value={input.password}/>
                     
                    </div>
                    <div>
                      <button type="submit" className="btn btn-light mt-3 mb-2  border border-warning">
                        login
                      </button>
                    </div>
                    <p className="">Are you Register <Link to={'/register'}>Register </Link>?</p>
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
