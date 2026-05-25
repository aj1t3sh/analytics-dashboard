import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../components/common/AdminLayout";

function Logs() {

  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchLogs();

  }, []);

  const fetchLogs = () => {

    API.get(`/api/logs?search=${search}`)
      .then((response) => {

        setLogs(response.data);

      })
      .catch((error) => {

        console.log(error);

      });
  };

  return (

    <AdminLayout title="System Logs">

      <div className="bg-white p-6 rounded-2xl shadow-sm">

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search logs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-xl w-full"
          />

          <button
            onClick={fetchLogs}
            className="bg-cyan-500 text-white px-6 rounded-xl"
          >
            Search
          </button>

        </div>

        <div className="space-y-4">

          {logs.map((log) => (

            <div
              key={log.id}
              className="border rounded-xl p-4"
            >

              <h1 className="text-xl font-bold">
                {log.eventName}
              </h1>

              <p className="text-red-500 mt-2">
                {log.eventType}
              </p>

              <p className="text-slate-500 mt-2 text-sm">
                {log.timestamp}
              </p>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>
  );
}

export default Logs;