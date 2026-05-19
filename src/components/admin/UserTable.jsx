const users = [
  {
    id: 1,
    name: "Ajitesh",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Satyam",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Satya",
    role: "User",
    status: "Inactive",
  },
]

function UserTable() {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-800">
          Recent Users
        </h2>

        <p className="text-slate-500 text-sm">
          Latest user activities
        </p>

      </div>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="pb-3">ID</th>

            <th className="pb-3">Name</th>

            <th className="pb-3">Role</th>

            <th className="pb-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-b hover:bg-slate-50 transition"
            >

              <td className="py-4">{user.id}</td>

              <td>{user.name}</td>

              <td>{user.role}</td>

              <td>

                <span className={`px-3 py-1 rounded-full text-sm ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}>

                  {user.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default UserTable