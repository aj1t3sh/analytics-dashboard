import UserLayout from "../../components/common/UserLayout"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const userData = [
  {
    day: "Mon",
    performance: 40,
  },
  {
    day: "Tue",
    performance: 55,
  },
  {
    day: "Wed",
    performance: 48,
  },
  {
    day: "Thu",
    performance: 70,
  },
  {
    day: "Fri",
    performance: 82,
  },
  {
    day: "Sat",
    performance: 76,
  },
]

function UserDashboard() {

  return (

    <UserLayout title="User Dashboard">

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-slate-500">
            Total Activities
          </h2>

          <h1 className="text-4xl font-bold mt-4 text-slate-800">
            128
          </h1>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-slate-500">
            Performance
          </h2>

          <h1 className="text-4xl font-bold mt-4 text-indigo-600">
            92%
          </h1>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-slate-500">
            Reports Viewed
          </h2>

          <h1 className="text-4xl font-bold mt-4 text-cyan-600">
            45
          </h1>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-slate-500">
            Growth
          </h2>

          <h1 className="text-4xl font-bold mt-4 text-green-600">
            +18%
          </h1>

        </div>

      </div>

      {/* Chart + Activity */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Chart */}

        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-slate-800">
              Weekly Performance
            </h1>

            <p className="text-slate-500 mt-1">
              User activity overview
            </p>

          </div>

          <ResponsiveContainer width="100%" height={320}>

            <AreaChart data={userData}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="performance"
                stroke="#6366f1"
                fill="#c7d2fe"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* Activity */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h1 className="text-2xl font-bold text-slate-800 mb-6">
            Recent Activity
          </h1>

          <div className="space-y-5">

            <div className="border-l-4 border-indigo-500 pl-4">

              <h2 className="font-semibold text-slate-700">
                Report Generated
              </h2>

              <p className="text-sm text-slate-500">
                Analytics report downloaded
              </p>

            </div>

            <div className="border-l-4 border-cyan-500 pl-4">

              <h2 className="font-semibold text-slate-700">
                Profile Updated
              </h2>

              <p className="text-sm text-slate-500">
                User information changed
              </p>

            </div>

            <div className="border-l-4 border-green-500 pl-4">

              <h2 className="font-semibold text-slate-700">
                Performance Increased
              </h2>

              <p className="text-sm text-slate-500">
                Weekly growth improved
              </p>

            </div>

          </div>

        </div>

      </div>

    </UserLayout>

  )
}

export default UserDashboard