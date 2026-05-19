function AdminCard({ title, value, growth, color }) {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-slate-500 text-sm font-medium">
            {title}
          </h2>

          <h1 className="text-4xl font-bold text-slate-800 mt-3">
            {value}
          </h1>

        </div>

        <div className={`${color} text-white px-3 py-1 rounded-lg text-sm font-semibold`}>

          {growth}

        </div>

      </div>

    </div>
  )
}

export default AdminCard