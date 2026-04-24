import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/log1.png";
import logo from "../assets/images/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className=" bg-[#f5f5e8] h-screen flex items-center ">
      <div className=" layout flex flex-col md:flex-row items-start justify-between gap-12">
        {/* LEFT — Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[32px] font-semibold text-black mb-1">Login</h1>
          <p className="text-gray-500 text-[15px] mb-6">
            Enter your details to sign in to your account.
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] text-gray-700" htmlFor="email">
                Email<span className="text-blue-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full h-12 px-4 border border-gray-300 bg-white rounded-xl text-sm outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] text-gray-700" htmlFor="password">
                Password<span className="text-blue-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-12 px-4 pr-11 border border-gray-300 bg-white rounded-xl text-sm outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div>
              <Link to="/forgot-password" className="text-blue-600 text-[13px]">
                Forget password?
              </Link>
            </div>
          </div>

          {/* Login button */}
          <button className="mt-6 w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-medium rounded-xl">
            Login
          </button>

          {/* Sign up */}
          <p className="mt-4 text-center text-gray-500 text-[14px]">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Sign Up
            </Link>
          </p>
        </div>

        {/* RIGHT — Image card */}
        <div className="w-full md:w-1/2  rounded-2xl overflow-hidden shadow-md">
          <img
            src={image1}
            alt="Interior"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Estatery logo overlay */}
          {/* <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow">
            <img src={logo} alt="Estatery" className="w-5 h-5 object-contain" />
            <span className="text-gray-800 font-semibold text-sm">
              Estatery
            </span>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Login;
