import React from 'react';
import './StatusBadge.css'; // Import the CSS file

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Published':
        return 'status-badge status-badge--published';
      case 'Draft':
        return 'status-badge status-badge--draft';
      default:
        return 'status-badge status-badge--default';
    }
  };

  return (
    <span className={getStatusClass(status)}>
      {status}
    </span>
  );
};

export default StatusBadge;