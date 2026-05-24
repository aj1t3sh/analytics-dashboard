import API from "../../services/api";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/common/AdminLayout";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Analytics() {

  const [metrics, setMetrics] = useState([]);

  useEffect(() => {

    API.get("/metrics")
      .then((response) => {
        setMetrics(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  // Convert backend data for chart
  const analyticsData = metrics.map((metric) => ({
    name: metric.metricName,
    users: metric.metricValue,
  }));

  return (

    <AdminLayout title="Analytics">

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Main Chart */}

        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">

          <div className="mb-6">

            <h1 className="text-2xl font-bold text-slate-800">
              System Analytics
            </h1>

            <p className="text-slate-500 mt-1">
              Real-time analytics overview
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

          {metrics.map((metric) => (

            <div
              key={metric.id}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >

              <h2 className="text-slate-500">
                {metric.metricName}
              </h2>

              <h1 className="text-5xl font-bold text-slate-800 mt-4">
                {metric.metricValue}
              </h1>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>

  );
}

export default Analytics;