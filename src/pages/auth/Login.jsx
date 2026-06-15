import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/authService"

import {
  Mail,
  Lock,
  ShieldCheck,
} from "lucide-react"

function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async () => {

    setError("")

    try {

      const response = await loginUser(username, password)

      console.log(response)

      // Save JWT Token

      localStorage.setItem("token", response.token)

      // Save Role

      localStorage.setItem("role", response.role)

      // Navigate

      if (response.role === "admin") {

        navigate("/admin-dashboard")

      } else {

        navigate("/user-dashboard")

      }

    } catch (error) {

      setError("Invalid Credentials")

      console.log(error)

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] via-[#fefaf6] to-[#fff1e6] relative overflow-hidden">

      {/* Background Blur */}

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-black-20 opacity-40 rounded-full blur-3xl"></div>

      <div className="bg-blue-20"></div>

      {/* Login Card */}

      <div className="relative z-10 w-full max-w-md bg-blue/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[32px] p-10">

        {/* Logo */}

        <div className="flex flex-col items-center mb-10">

          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-2xl shadow-lg">

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

          <div className="bg-blue-100 border border-blue-300 text-red-600 px-4 py-3 rounded-xl mb-5 text-sm font-medium">

            {error}

          </div>

        )}

        {/* Username */}

        <div className="mb-5">

          <label className="text-sm font-semibold text-slate-600">

            Username

          </label>

          <div className="flex items-center bg-white mt-2 border border-slate-200 rounded-xl px-4 py-4 focus-within:ring-2 focus-within:ring-orange-300 transition shadow-sm">

            <Mail
              size={20}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

        {/* Login Button */}

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:scale-[1.02] text-white p-4 rounded-xl font-semibold transition duration-300 shadow-lg"
        >

          Login

        </button>

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

              admin / admin123

            </p>

            <p>

              <span className="font-semibold text-pink-500">
                User:
              </span>{" "}

              user / user123

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