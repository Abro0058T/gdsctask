import React from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("email")
        localStorage.removeItem("name")
        navigate("/")
    }
  return (
    <Fragment>
        <button onClick={logout}>Logout</button>
    </Fragment>
  )
}

export default Logout