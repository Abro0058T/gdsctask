import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser ,checkUser} from "../../actions/productAction";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const { exist, username, loading } = useSelector((state) => state.checkUser);
  console.log(exist, loading,username);
  const dispatch = useDispatch();
  const register = async () => {
    dispatch(registerUser(localStorage.getItem("email") ,name));
    navigate(`/${name}`)
  };
  useEffect(()=>{
    dispatch(checkUser(localStorage.getItem("email")))
  },[dispatch])
  return (
    <Fragment>
      {
        username? navigate(`/${username}`,{replace:true}):(
          <Fragment>
          {/* <h1>Enter email</h1> */}
          {/* <input
            placeholder="Enter your email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input> */}
          <h1>Enter name </h1>
          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <button onClick={register}>CLick to proceed</button>
        </Fragment>   
        )
      }
 
    </Fragment>
  );
}

export default Login;
