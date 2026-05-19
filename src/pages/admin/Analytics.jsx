import AdminLayout from "../../components/common/AdminLayout"

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

const analyticsData = [
  {
    name: "Mon",
    users: 400,
  },
  {
    name: "Tue",
    users: 700,
  },
  {
    name: "Wed",
    users: 500,
  },
  {
    name: "Thu",
    users: 900,
  },
  {
    name: "Fri",
    users: 1200,
  },
  {
    name: "Sat",
    users: 950,
  },
]

function Analytics() {

  return (

    <AdminLayout title="Analytics">

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Main Chart */}

        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-slate-800">
              Weekly User Analytics
            </h1>

            <p className="text-slate-500 mt-1">
              User engagement overview
            </p>

          </div>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={analyticsData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="users"
                fill="#06b6d4"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Side Stats */}

        <div className="space-y-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h2 className="text-slate-500">
              Active Users
            </h2>

            <h1 className="text-5xl font-bold text-slate-800 mt-4">
              8.2K
            </h1>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h2 className="text-slate-500">
              Engagement Rate
            </h2>

            <h1 className="text-5xl font-bold text-indigo-600 mt-4">
              78%
            </h1>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h2 className="text-slate-500">
              Growth
            </h2>

            <h1 className="text-5xl font-bold text-green-600 mt-4">
              +24%
            </h1>

          </div>

        </div>

      </div>

    </AdminLayout>

  )
}

export default Analytics