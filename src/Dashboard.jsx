import React, { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import SearchIcon from "./image/search.svg";
import "./Dashboard.css";
import admin from "./image/admin.svg";
import DashCard from "./DashCard";

export default function Dashboard() {
  const location = useLocation(); // Use useLocation hook to get current location
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(0);

  const handleSearch = () => {
    // You can perform search operations here based on the search query
    // For example, you can filter a list of items based on the search query
  };

  // Check if the current location is "/dashboard"
  const shouldRenderHeader = location.pathname === "/dashboard";

  return (
    <div id="dashboard" className="dash">
      {shouldRenderHeader && ( // Render header only if current location is "/dashboard"
        <div className="dashhead">
          <ul className="headwrap">
            <li className="hom">
              <FaBars className="dashnav" />
              <p>Home</p>
            </li>
            <li className="sash">
              <div className="sashtag">
                <label htmlFor="searchInput" className="sarch" onClick={handleSearch}>
                  <img src={SearchIcon} alt="Search" className="sashnav" />
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="sashput"
                  />
                </label>
              </div>
            </li>
            <li className="alert">
              <div className="bell-icon-container">
                <FaBell className="bell-icon" />
                {notifications > 0 && (
                  <span className="notification-count">{notifications}</span>
                )}
              </div>
            </li>
            <li className="admin">
              <img src={admin} alt="admin" className="adminimg" />
              <div className="adminname">
                <p className="ad1">Administrator</p>
                <p className="ad2">info@companyname.com</p>
              </div>
            </li>
          </ul>
        </div>
      )}

      <div className="dashbody">
        <div className="bocard">
          <DashCard />
        </div>
      </div>
    </div>
  );
}
