import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("User Login: ", {email, password})
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#F8EDEB] to-[#E8CFCB]">

      {/* Left Image */}
        <div className="hidden md:block w-1/2 bg-white pt-10 pb-10"> 
         <div className="h-full flex flex-col justify-center items-center">
          <img
            src={loginImg}
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-[#E8CFCB]">
          
          {/* Brand */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-[#B76E79] tracking-wide">
              HANDMADE HAVEN
            </h2>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Welcome back!
          </h2>

          {/* Subtext */}
          <p className="text-center mb-6 text-gray-500 text-sm">
            Login to continue your cozy shopping journey.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#E8CFCB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-[#E8CFCB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D8A7B1] to-[#B76E79] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            Sign In
          </button>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#B76E79] font-medium hover:underline"
            >
              Create one ✨
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;