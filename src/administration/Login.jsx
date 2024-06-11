import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/new-logo.svg"
import whitePattern from "../assets/images/pattern-svg.svg";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const navigate = useNavigate()

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/admin/dashboard')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })

  };
    return (
        <div className="md:p-16">
        <div className="flex">
            <img src={logo} alt="logo" className="ml-auto" />
        </div>
        <div className="w-1/2 mx-auto">
            <h2 className="text-[#0684FF] text-center text-[40px] font-saeada-regular">Admin Login</h2>
            <h4 className="text-center text-[#6D6D6D] tracking-wider font-saeada-light">Hello admin, please enter your login details</h4>
            <form id="myForm" onSubmit={handleSubmit} className="p-8 grid gap-4 grid-cols-1 mt-4 rounded-[32px] mb-4">
            
            <div className="">
                <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="email">Email Address</label>
                <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                    <input id="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} type="email" name="email" placeholder="Email Address" className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                </div>
                    <span id="emailError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs"></span>
            </div>
            <div className="">
                <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="password">Password</label>
                <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                    <input id="password" onChange={(e)=> {setPassword(e.target.value)}} type="password" name="password" placeholder="Password" className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                </div>
                    <span id="passwordError" value={password} className="font-saeada-extraLight tracking-widest text-red-500 text-xs"></span>
            </div>
            <button type="submit" className="outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light">
                <img src={whitePattern} alt="background Image" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                Sign In
            </button>
            </form>
        </div>
    </div>
    )
}

export default Login;