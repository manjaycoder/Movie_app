import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "../../../component/Loader";
import { setCredentials } from "../../../redux/feature/auth/authSlice";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../../redux/api/users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault(); 
    try {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
    } catch (error) {
        toast.error(error?.data?.message || error.message); 
    }
};


  return (
    <>
  
      <section className="pl-[10rem] flex flex-wrap">
      

        <div className="mr-[2rem] mt-[5rem]">
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <form onSubmit={submitHandler} className="container w-[30rem]">
          <div className="my-[2rem]">
  <label
    htmlFor="email"
    className="block text-sm font-medium text-white"
  >
    Email Address
  </label>
  <input
    type="email"
    id="email"
    className="mt-1 p-2 border rounded w-full"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required 
    aria-describedby="emailHelp"
  />
  <small id="emailHelp" className="text-gray-400">
    
  </small>
</div>



{/* password */}
<div className="my-[2rem]">
  <label
    htmlFor="password"
    className="block text-sm font-medium text-white"
  >
    Password
  </label>
  <input
    type="password"
    id="password"
    className="mt-1 p-2 border rounded w-full"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required 
    aria-describedby="passwordHelp"
  />
  
</div>
<button disabled={isLoading} type="submit" className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]" >
  {isLoading?"Sign In..." : "Sign In"}
</button>
{isLoading && <Loader/>}
          </form>
          <div className="text-white"> 
            New Customer ? {" "}
            <Link to={redirect ? `/register?redirect=${redirect}`:"/register"} className="text-teal-500 hover:underline" > Register </Link>
             </div>
        </div>

        
      </section>
    </>
  );
};

export default Login;
