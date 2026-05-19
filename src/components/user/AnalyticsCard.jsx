import React from 'react';

const AnalyticsCard = ({ title, value, trend }) => {
  return (
    <div className="analytics-card">
      <div className="card-header">
        <h4>{title}</h4>
        <span className="trend">{trend}</span>
      </div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default AnalyticsCard;
