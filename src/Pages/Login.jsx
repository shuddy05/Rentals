import React from 'react'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden font-['DM_Sans',sans-serif]">

      {/* ── LEFT PANEL ── */}
      <div className="relative flex flex-col justify-center w-full md:w-1/2 bg-[#0d0d0d] px-10 md:px-16 lg:px-24 py-12 z-10">

        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "150px",
          }}
        />

        {/* Mobile logo */}
        <div className="flex md:hidden items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-[#7c5cfc] rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Estatery</span>
        </div>

        {/* Heading */}
        <div className="mb-10 animate-[fadeUp_0.5s_ease_forwards] opacity-0" style={{ animationDelay: "0.1s" }}>
          <p className="text-gray-400 text-sm mb-2 tracking-wide">
            Enter your details to sign in to your account.
          </p>
          <h1 className="text-white text-3xl font-bold tracking-tight leading-snug">
            Welcome back
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <div className="flex flex-col gap-1.5 animate-[fadeUp_0.5s_ease_forwards] opacity-0" style={{ animationDelay: "0.2s" }}>
            <label className="text-gray-400 text-xs font-medium tracking-widest uppercase">
              Email <span className="text-[#7c5cfc]">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#7c5cfc] transition-all"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5 animate-[fadeUp_0.5s_ease_forwards] opacity-0" style={{ animationDelay: "0.3s" }}>
            <label className="text-gray-400 text-xs font-medium tracking-widest uppercase">
              Password <span className="text-[#7c5cfc]">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-xl px-5 py-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#7c5cfc] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="animate-[fadeUp_0.5s_ease_forwards] opacity-0" style={{ animationDelay: "0.35s" }}>
            <Link to="/forgot-password" className="text-[#7c5cfc] text-sm hover:text-[#9b82fd] transition-colors">
              Forget password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="animate-[fadeUp_0.5s_ease_forwards] opacity-0 mt-2 w-full bg-[#7c5cfc] hover:bg-[#6b4ef0] active:scale-[0.98] text-white font-semibold text-sm py-4 rounded-xl transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2"
            style={{ animationDelay: "0.4s" }}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Signing in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-8 text-center text-gray-500 text-sm animate-[fadeUp_0.5s_ease_forwards] opacity-0" style={{ animationDelay: "0.5s" }}>
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-[#7c5cfc] font-semibold hover:text-[#9b82fd] transition-colors">
            Sign Up
          </Link>
        </p>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="hidden md:block relative w-1/2 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85"
          alt="Luxury interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Branding */}
        <div className="absolute top-8 right-8 flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#7c5cfc] rounded-xl flex items-center justify-center shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight drop-shadow">Estatery</span>
        </div>

        {/* Bottom glass card */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
            <p className="text-white font-semibold text-lg leading-snug">
              Find the perfect home <br />
              <span className="text-[#b8a4ff]">that fits your lifestyle.</span>
            </p>
            <p className="text-white/60 text-sm mt-1">Thousands of listings across Nigeria.</p>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Login




