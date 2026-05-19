import { Search, Bell } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Navbar({
  title,
  subtitle,
  name,
  role,
  avatarColor,
  avatarLetter,
}) {

  const navigate = useNavigate()

  const handleLogout = () => {

  localStorage.removeItem("role")

  navigate("/")
}

  return (

    <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">

      {/* Left Section */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-slate-500 mt-1">
          {subtitle}
        </p>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-5">

        {/* Search Bar */}

        <div className="flex items-center bg-slate-100 px-4 py-3 rounded-xl w-72">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 w-full text-slate-700"
          />

        </div>

        {/* Notification */}

        <div className="bg-slate-100 p-3 rounded-xl hover:bg-slate-200 transition cursor-pointer">

          <Bell size={20} />

        </div>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <div
            className={`w-11 h-11 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold`}
          >

            {avatarLetter}

          </div>

          <div>

            <h2 className="font-semibold text-slate-700">
              {name}
            </h2>

            <p className="text-sm text-slate-400">
              {role}
            </p>

          </div>

        </div>

        {/* Logout Button */}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition shadow-sm"
        >

          Logout

        </button>

      </div>

    </div>
  )
}

export default Navbar