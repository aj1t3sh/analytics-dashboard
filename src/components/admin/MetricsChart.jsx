import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    month: "Jan",
    users: 400,
  },
  {
    month: "Feb",
    users: 700,
  },
  {
    month: "Mar",
    users: 500,
  },
  {
    month: "Apr",
    users: 900,
  },
  {
    month: "May",
    users: 1200,
  },
  {
    month: "Jun",
    users: 1000,
  },
]

function MetricsChart() {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-800">
          User Analytics
        </h2>

        <p className="text-slate-500 text-sm">
          Monthly user growth overview
        </p>

      </div>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#06b6d4"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}

export default MetricsChart