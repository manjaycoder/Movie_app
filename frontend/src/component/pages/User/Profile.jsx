import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../../component/Loader";
import { setCredentials } from "../../../redux/feature/auth/authSlice";
import { useProfileMutation } from "../../../redux/api/users";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading: loaingUpdateProfile }] =
    useProfileMutation();
  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return; // Early return if passwords do not match
    }
  
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        username,
        email,
        password,
      }).unwrap();
  
      dispatch(setCredentials({ ...res }));
      toast.success("Profile updated successfully");
    } catch (err) {
      // Access the error message safely
      const errorMessage = err?.data?.message || err?.error || "An error occurred";
      toast.error(errorMessage);
    }
  };
  
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg')] w-[100%] h-[100%] fixed     bg-blur-lg"  >
        
      <div className="container mx-auto p-4 mt-[5rem] pl-[10rem] ">
        <div className="md: w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="block text-md font-medium text-white dark:text-white mb-2 ">Name </label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-md font-medium text-white dark:text-white mb-2 ">Email </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-md font-medium text-white dark:text-white mb-2" >Password </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-md font-medium text-white dark:text-white mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-teal-600 w-screen mt-[2rem] font-bold text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
              >
                Update
              </button>

              {loaingUpdateProfile && <Loader />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
