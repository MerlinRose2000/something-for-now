//import React from 'react'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dash-boxes">
      <div className="username-box">
        <div>
          <h2 className="username-title">Username</h2>
          <div className="username-layout">
            <div className="username-titles"></div>
          </div>
        </div>

        <div className="password-box">
          <h2 className="password-title">Passwords</h2>
          <div className="password-layout">
            <div className="password-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
