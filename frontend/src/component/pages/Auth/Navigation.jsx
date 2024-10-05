import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/api/users";
import { logout } from "../../../redux/feature/auth/authSlice";
const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLoginMutation();

  return (
    <div
      className="fixed bottom-10 left-[30rem] transform 
    translate-x-1/2 translate-y-1/2 z-50 bg-[#0f0f0f] border w- [30%] px-[4rem] mb-[2rem] rounded"
    >
      <section className="flex justify-between items-center">
        {/*Section*/}
        <div className="flex justify-center items-center        mb-[2rem]">
          <Link
            to="/"
            className="flex items-center transition-transform 
            transform hover:translate-x-2"
          >
            <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
            <span className="hidden nav-items-name mt-[3rem]">Home</span>
          </Link>
          <Link
            to="/movies"
            classname="flex items-center transition-transform transform hover:translate-x-2 ml-[1rem]"
          >
            <MdOutlineLocalMovies className=" mr-2 mt-[3rem]" size={26} />{" "}
            <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
          </Link>
        </div>
        {/*Section*/}
        <div className="relative">
          <button onClick={toggleDropdown} className="text-gray-800 focus:outline-none">{userInfo?(<span className="text-white">{userInfo.username}</span>):(<></>)}
          {userInfo &&(<svg xmlns='http://www.w3.org/2000/svg' className={`h-4 w-4 ml-1 ${dropdownOpen ? 'transform route-180':""}`} fill='none'viewBox="0 0 24 24" stroke='white'    >
       <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth='2' d={dropdownOpen  ?"M5 15l7-7 7 7":'M19 9l-7 7-7-7'  } />   </svg>)}</button>
       {}
          <button></button>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
