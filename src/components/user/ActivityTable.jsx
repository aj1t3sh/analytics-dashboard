import React, { useState, useEffect } from 'react';

const ActivityTable = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities data
  }, []);

  return (
    <div className="activity-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Render activities */}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
