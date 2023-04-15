import React from 'react'
import { Fragment } from 'react'
import {auth,provider} from "../../firebase"
import {signInWithPopup} from "firebase/auth"
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Sign() {
  const navigate=useNavigate()
  const [value,setValue]=useState('')
  const [exist,setExist]=useState()
    const handleClick=()=>{
      console.log("hellow")
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
      })
    }
  
  useEffect(()=>{
    userexist()
    // setValue(localStorage.getItem("email"))
  })
  const userexist=()=>{
    setExist(localStorage.getItem('email'))
  }
  return (
    <Fragment>
      {
         exist ? navigate("/register"): 
       <button onClick={handleClick}>Signin with google</button> 
      }
    </Fragment>
  )
}

export default Sign