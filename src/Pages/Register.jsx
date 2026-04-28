import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/log1.png";
import logo from "../assets/images/logo.png";

const Register = () => {
      // CHANGE 1: Separate states for each password field's visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // CHANGE 2: Added value states so we can compare passwords
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // CHANGE 3: Derived mismatch flag — only shows error after user types in confirm field
  const passwordMismatch = confirmPassword.length > 0 && password !== confirmPassword;
  
  return (
    <main className=" bg-[#f5f5e8] h-screen  ">
      <div className=" layout  flex flex-col gap-5 md:flex-row justify-between items-center ">
        <div className=" w-full md:max-w-113.25 md:max-h-149.5 ">
          <h1 className="text-[32px] font-bold">Sign Up</h1>
          <p className="text-[16px] text-gray-500 mb-6">
            Enter your details to sign up
          </p>

          <div className="flex flex-col gap-3">
            <label className="text-[16px]" htmlFor="email">
              {" "}
              Email <span className="text-red-500 font-bold text-xl ">*</span>
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter email"
              className="w-full h-12 px-4 pr-11 border border-gray-300 bg-white rounded-xl text-sm outline-none focus:border-blue-500  "
            />
          </div>

          {/* Password */}
          {/* CHANGE 5: Separated Password and Confirm Password into their own divs — 
            they were both nested inside one flex-col which broke spacing */}
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[16px]" htmlFor="password">
              Password <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 pr-11 border border-gray-300 bg-white rounded-xl text-sm outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-[16px]" htmlFor="confirmPassword">
              Confirm Password <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // CHANGE 6: Border turns red on mismatch
                className={`w-full h-12 px-4 pr-11 border bg-white rounded-xl text-sm outline-none focus:border-blue-500 ${
                  passwordMismatch ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
            {/* CHANGE 7: Inline error message on mismatch */}
            {passwordMismatch && (
              <p className="text-red-500 text-[13px]">Passwords do not match</p>
            )}
          </div>

          {/* Sign Up button */}
          {/* CHANGE 8: Button disabled when passwords don't match */}
          <button
            disabled={passwordMismatch || !password || !confirmPassword}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[15px] font-medium rounded-xl"
          >
            Sign Up
          </button>

          <Link to="/">
            <p className="text-gray-600  cursor-pointer text-center mt-[24px]">
              Don't have account? <span className="text-[#7065F0]">Login</span>
            </p>
          </Link>
        </div>

        <div className="  shadow-md">
          <img src={image1} alt="Interior" className="" />
        </div>
      </div>
    </main>
  );
}

export default Register