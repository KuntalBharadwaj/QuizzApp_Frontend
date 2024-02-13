import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const handlesubmit = (e)=>{
        e.preventDefault()
        navigate('/dashboard')
    } 

  return (
    <div className='login'>
        <input type='email' required></input>
        <input type='password' required></input>
        <button type='submit' onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
