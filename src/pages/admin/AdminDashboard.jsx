import AdminLayout from "../../components/common/AdminLayout"
import MetricsChart from "../../components/admin/MetricsChart"
import UserTable from "../../components/admin/UserTable"
import AdminCard from "../../components/admin/AdminCard"
import QuickActions from "../../components/admin/QuickActions"

function AdminDashboard() {

  const adminStats = [
    {
      title: "Total Users",
      value: "1,245",
      growth: "+12%",
      color: "bg-green-500",
    },
    {
      title: "Reports Generated",
      value: "320",
      growth: "+8%",
      color: "bg-cyan-500",
    },
    {
      title: "Active Sessions",
      value: "89",
      growth: "+5%",
      color: "bg-indigo-500",
    },
  ]

  return (

    <AdminLayout title="Admin Dashboard">

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {adminStats.map((item, index) => (

          <AdminCard
            key={index}
            title={item.title}
            value={item.value}
            growth={item.growth}
            color={item.color}
          />

        ))}

      </div>
      <div className="mt-8">

  <QuickActions />

</div>

      {/* Chart */}

      <div className="mt-8">

        <MetricsChart />

      </div>

      {/* Table */}

      <div className="mt-8">

        <UserTable />

      </div>

    </AdminLayout>
  )
}

export default AdminDashboard