import {useState} from 'react'
import { Link } from 'react-router-dom';
import Login from './Login'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup(){
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{console.log(result)
            navigate('/login')
        })

        .then(err=>console.log(err))
    }
    return(
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label"><strong>Name</strong></label>
                  <input type="text" className="form-control" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label"><strong>Email</strong></label>
                  <input type="email" className="form-control" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label"><strong>Password</strong></label>
                  <input type="password" className="form-control" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Register</button>
                  <p className="text-center mt-3 mb-0">Already have an account?</p>
                  <Link to='/login' element={<Login/>} className="btn btn-outline-secondary">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Signup;