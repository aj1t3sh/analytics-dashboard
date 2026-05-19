import UserLayout from "../../components/common/UserLayout"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const performanceData = [
  {
    month: "Jan",
    score: 45,
  },
  {
    month: "Feb",
    score: 60,
  },
  {
    month: "Mar",
    score: 55,
  },
  {
    month: "Apr",
    score: 80,
  },
  {
    month: "May",
    score: 90,
  },
]

const pieData = [
  {
    name: "Completed",
    value: 70,
  },
  {
    name: "Pending",
    value: 20,
  },
  {
    name: "Failed",
    value: 10,
  },
]

const COLORS = ["#6366f1", "#06b6d4", "#ef4444"]

function UserAnalytics() {

  return (

    <UserLayout title="User Analytics">

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Performance Chart */}

        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-slate-800">
              Performance Overview
            </h1>

            <p className="text-slate-500 mt-1">
              Monthly analytics performance
            </p>

          </div>

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={performanceData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#6366f1"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* Pie Chart */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h1 className="text-2xl font-bold text-slate-800 mb-6">
            Task Status
          </h1>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {pieData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </UserLayout>

  )
}

export default UserAnalytics