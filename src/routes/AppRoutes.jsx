import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/auth/Login"

import AdminDashboard from "../pages/admin/AdminDashboard"
import Analytics from "../pages/admin/Analytics"
import Reports from "../pages/admin/Reports"

import UserDashboard from "../pages/user/UserDashboard"
import UserAnalytics from "../pages/user/UserAnalytics"
import UserReports from "../pages/user/UserReports"

import ProtectedRoute from "../components/common/ProtectedRoute"

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* Admin Routes */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="admin">

              <AdminDashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute allowedRole="admin">

              <Analytics />

            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRole="admin">

              <Reports />

            </ProtectedRoute>
          }
        />

        {/* User Routes */}

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRole="user">

              <UserDashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/user-analytics"
          element={
            <ProtectedRoute allowedRole="user">

              <UserAnalytics />

            </ProtectedRoute>
          }
        />

        <Route
          path="/user-reports"
          element={
            <ProtectedRoute allowedRole="user">

              <UserReports />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )
}

export default AppRoutes