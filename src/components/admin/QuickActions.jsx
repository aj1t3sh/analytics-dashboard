import { Download, BarChart3, Activity } from "lucide-react"

function QuickActions() {

  return (

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Export Report */}

      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Export Reports
            </h2>

            <p className="text-slate-500 mt-2">
              Download analytics reports instantly.
            </p>

          </div>

          <div className="bg-cyan-100 p-4 rounded-xl">

            <Download className="text-cyan-600" />

          </div>

        </div>

        <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl transition">
          Export
        </button>

      </div>

      {/* Analytics */}

      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Generate Analytics
            </h2>

            <p className="text-slate-500 mt-2">
              Create latest dashboard insights.
            </p>

          </div>

          <div className="bg-indigo-100 p-4 rounded-xl">

            <BarChart3 className="text-indigo-600" />

          </div>

        </div>

        <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-xl transition">
          Generate
        </button>

      </div>

      {/* Live Status */}

      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              System Status
            </h2>

            <p className="text-slate-500 mt-2">
              Server running smoothly.
            </p>

          </div>

          <div className="bg-green-100 p-4 rounded-xl">

            <Activity className="text-green-600" />

          </div>

        </div>

        <div className="mt-6 flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="text-green-600 font-semibold">
            Active
          </span>

        </div>

      </div>

    </div>
  )
}

export default QuickActions