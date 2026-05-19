import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  Mail,
  Lock,
  ShieldCheck,
} from "lucide-react"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (role) => {

    setError("")

    // Admin Login

    if (
      role === "admin" &&
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      localStorage.setItem("role", "admin")

      navigate("/admin-dashboard")
    }

    // User Login

    else if (
      role === "user" &&
      email === "user@gmail.com" &&
      password === "user123"
    ) {

      localStorage.setItem("role", "user")

      navigate("/user-dashboard")
    }

    else {

      setError("Invalid Credentials")

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] via-[#fefaf6] to-[#fff1e6] relative overflow-hidden">

      {/* Background Blur */}

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-orange-200 opacity-40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-pink-200 opacity-40 rounded-full blur-3xl"></div>

      {/* Login Card */}

      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[32px] p-10">

        {/* Logo */}

        <div className="flex flex-col items-center mb-10">

          <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-4 rounded-2xl shadow-lg">

            <ShieldCheck
              size={40}
              className="text-white"
            />

          </div>

          <h1 className="text-5xl font-extrabold text-slate-800 mt-5">

            InsightX

          </h1>

          <p className="text-slate-500 mt-3 text-center">

            Real-Time Analytics Dashboard Platform

          </p>

        </div>

        {/* Error */}

        {error && (

          <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl mb-5 text-sm font-medium">

            {error}

          </div>

        )}

        {/* Email */}

        <div className="mb-5">

          <label className="text-sm font-semibold text-slate-600">

            Email Address

          </label>

          <div className="flex items-center bg-white mt-2 border border-slate-200 rounded-xl px-4 py-4 focus-within:ring-2 focus-within:ring-orange-300 transition shadow-sm">

            <Mail
              size={20}
              className="text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full ml-3 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            />

          </div>

        </div>

        {/* Password */}

        <div className="mb-8">

          <label className="text-sm font-semibold text-slate-600">

            Password

          </label>

          <div className="flex items-center bg-white mt-2 border border-slate-200 rounded-xl px-4 py-4 focus-within:ring-2 focus-within:ring-pink-300 transition shadow-sm">

            <Lock
              size={20}
              className="text-slate-400"
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full ml-3 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="space-y-4">

          <button
            onClick={() => handleLogin("admin")}
            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:scale-[1.02] text-white p-4 rounded-xl font-semibold transition duration-300 shadow-lg"
          >

            Login as Admin

          </button>

          <button
            onClick={() => handleLogin("user")}
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:scale-[1.02] text-white p-4 rounded-xl font-semibold transition duration-300 shadow-lg"
          >

            Login as User

          </button>

        </div>

        {/* Credentials */}

        <div className="mt-8 bg-slate-50 rounded-2xl p-4 border border-slate-200">

          <h2 className="text-sm font-semibold text-slate-700 mb-3">

            Demo Credentials

          </h2>

          <div className="space-y-2 text-sm text-slate-500">

            <p>

              <span className="font-semibold text-orange-500">
                Admin:
              </span>{" "}

              admin@gmail.com / admin123

            </p>

            <p>

              <span className="font-semibold text-pink-500">
                User:
              </span>{" "}

              user@gmail.com / user123

            </p>

          </div>

        </div>

        {/* Footer */}

        <p className="text-center text-xs text-slate-400 mt-6">

          © 2026 InsightX Analytics Platform

        </p>

      </div>

    </div>
  )
}

export default Login