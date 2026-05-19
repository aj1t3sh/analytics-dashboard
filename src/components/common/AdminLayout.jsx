import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

import {
  LayoutDashboard,
  BarChart3,
  FileText,
} from "lucide-react"

function AdminLayout({ children, title }) {

  const adminMenu = [
    {
      name: "Dashboard",
      path: "/admin-dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText size={20} />,
    },
  ]

  return (

    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar
        menuItems={adminMenu}
        logoColor="text-cyan-600"
      />

      <div className="flex-1">

        <Navbar
          title={title}
          subtitle="Welcome back, Admin 👋"
          name="Admin"
          role="Administrator"
          avatarColor="bg-cyan-500"
          avatarLetter="A"
        />

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>
  )
}

export default AdminLayout