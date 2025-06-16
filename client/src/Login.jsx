import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login(){
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result)
            if (result.data==="Success"){
            navigate("/home")
            }
        })
        .catch(err=>console.log(err))
    }
    return(
    <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label"><strong>Email</strong></label>
                    <input type="email" className="form-control" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p className="text-center mt-3 mb-0">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-secondary">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}
export default Login;