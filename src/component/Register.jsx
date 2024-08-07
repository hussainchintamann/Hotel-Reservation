import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlerStoreName = (e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const handlerStoreEmail = (e)=>{
 setInput({...input,[e.target.name]: e.target.value})
  }

  const handlerStorePassword = (e)=>{
    setInput({...input,[e.target.name]: e.target.value})
     }

     const handlerSubmit=(e)=>{
      e.preventDefault()
      localStorage.setItem("user",JSON.stringify(input))
       navigate('/Login')
     }

  return (
    <div className="mt-5">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius:'15px'}}>
                <div className="card-body p-5">
                  <h2>create an account</h2>
                  <form onSubmit={handlerSubmit}>
                    <div className="form-outline ">
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog">Your Name</label>
                      <input 
                      name="name"
                      value={input.name}
                      onChange={handlerStoreName}
                      type="text" 
                      id="form3ExampleLog"
                      className="form-control" />
                      
                    </div>
                    <div>
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog"> Your Email</label>
                      <input 
                      name="email"
                      value={input.email}
                      onChange={handlerStoreEmail}
                      type="email"
                      className="form-control"
                      id="form3ExampleLog" />
                      
                      
                    </div>
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog">Password</label>
                    <input 
                    name="password"
                    value={input.password}
                    onChange={handlerStorePassword}
                    type="password"
                    className="form-control"
                    id="form3ExampleLog" />
                    
                    <div>
                      <button type="submit" className="btn btn-light mt-3 mb-2 border border-warning">
                        Register
                      </button>
                    </div>
                    <p className="">Have already an account <Link to={'/login'}>login </Link>?</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
