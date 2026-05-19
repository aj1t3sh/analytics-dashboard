import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

import {
  LayoutDashboard,
  BarChart3,
  FileText,
} from "lucide-react"

function UserLayout({ children, title }) {

  const userMenu = [
    {
      name: "Dashboard",
      path: "/user-dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Analytics",
      path: "/user-analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Reports",
      path: "/user-reports",
      icon: <FileText size={20} />,
    },
  ]

  return (

    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar
        menuItems={userMenu}
        logoColor="text-indigo-600"
      />

      <div className="flex-1">

        <Navbar
          title={title}
          subtitle="Track your analytics and performance"
          name="User"
          role="Standard User"
          avatarColor="bg-indigo-500"
          avatarLetter="U"
        />

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>
  )
}

export default UserLayout