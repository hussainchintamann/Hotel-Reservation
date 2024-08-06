import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <h2>create an account</h2>
                  <form onSubmit={handlerSubmit}>
                    <div className="">
                      <input 
                      name="name"
                      value={input.name}
                      onChange={handlerStoreName}
                      type="text" 
                      id="form3ExampleLog"
                      className="" />
                      <label htmlFor="form3ExampleLog">Your Name</label>
                    </div>
                    <div>
                      <input 
                      name="email"
                      value={input.email}
                      onChange={handlerStoreEmail}
                      type="email"
                      id="form3ExampleLog" />
                      <label htmlFor="form3ExampleLog"> Your Email</label>
                    </div>

                    <input 
                    name="password"
                    value={input.password}
                    onChange={handlerStorePassword}
                    type="password"
                    id="form3ExampleLog" />
                    <label htmlFor="form3ExampleLog">Password</label>
                    <div>
                      <button type="submit" className="">
                        Register
                      </button>
                    </div>
                    <p className="">Have already an account?</p>
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
