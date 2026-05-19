import { NavLink } from "react-router-dom"

function Sidebar({ menuItems, logoColor }) {

  return (

    <div className="w-72 min-h-screen bg-white border-r border-slate-200 p-6 shadow-sm">

      {/* Logo */}

      <div className="mb-12">

        <h1 className={`text-3xl font-bold ${logoColor}`}>
          InsightX
        </h1>

        <p className="text-slate-500 text-sm">
          Analytics Platform
        </p>

      </div>

      {/* Menu */}

      <ul className="space-y-3">

        {menuItems.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 rounded-xl transition cursor-pointer
              
              ${
                isActive
                  ? "bg-cyan-500 text-white shadow-md"
                  : "text-slate-700 hover:bg-cyan-50"
              }`
            }
          >

            {item.icon}

            {item.name}

          </NavLink>

        ))}

      </ul>

    </div>
  )
}

export default Sidebar