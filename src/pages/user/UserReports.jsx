import UserLayout from "../../components/common/UserLayout"

const reports = [
  {
    id: "#USR201",
    title: "Weekly Activity",
    status: "Completed",
    date: "18 May 2026",
  },
  {
    id: "#USR202",
    title: "Performance Summary",
    status: "Pending",
    date: "19 May 2026",
  },
  {
    id: "#USR203",
    title: "Monthly Insights",
    status: "Completed",
    date: "20 May 2026",
  },
]

function UserReports() {

  return (

    <UserLayout title="User Reports">

      <div className="bg-white rounded-2xl shadow-sm p-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              User Reports
            </h1>

            <p className="text-slate-500 mt-2">
              View and download your generated reports
            </p>

          </div>

          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-xl transition">
            Generate Report
          </button>

        </div>

        {/* Table */}

        <table className="w-full">

          <thead>

            <tr className="border-b text-left">

              <th className="pb-4">Report ID</th>

              <th className="pb-4">Title</th>

              <th className="pb-4">Status</th>

              <th className="pb-4">Date</th>

              <th className="pb-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {reports.map((report, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50 transition"
              >

                <td className="py-5 font-semibold">
                  {report.id}
                </td>

                <td>
                  {report.title}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium

                    ${
                      report.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >

                    {report.status}

                  </span>

                </td>

                <td>
                  {report.date}
                </td>

                <td>

                  <button className="bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition">

                    Download

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </UserLayout>

  )
}

export default UserReports