import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "../../../component/Loader";
import { setCredentials } from "../../../redux/feature/auth/authSlice";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../../redux/api/users";

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState("")
  const dispatch=useDispatch();
  const navigate=useNavigate()
  return (
    <>
    
    </>
  )
}

export default Login