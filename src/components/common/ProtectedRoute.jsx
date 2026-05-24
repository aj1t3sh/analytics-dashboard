import { Navigate } from "react-router-dom"

function ProtectedRoute({ children, allowedRole }) {

  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

  // No Token

  if (!token) {

    return <Navigate to="/" />

  }

  // Wrong Role

  if (role !== allowedRole) {

    return <Navigate to="/" />

  }

  return children
}

export default ProtectedRoute