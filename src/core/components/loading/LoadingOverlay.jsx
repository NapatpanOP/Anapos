import React from 'react';
import './LoadingOverlay.css';

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingOverlay;
