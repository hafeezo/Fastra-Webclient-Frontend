import React, { useState } from "react";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import SearchIcon from "../image/search.svg";
import "./Dashboard.css";
import admin from "../image/admin.svg";
import DashCard from "./DashCard";
import Sidebar from ".././components/Sidebar";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleSearch = () => {
    // You can perform search operations here based on the search query
    // For example, you can filter a list of items based on the search query
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="dashboard" className="dash">
      <div className="dashhead">
        <ul className="headwrap">
          <li className="hom" onClick={toggleMenu}>
            {showMenu ? (
              <FaTimes className="dashnav" />
            ) : (
              <FaBars className="dashnav" />
            )}
            <p>Home</p>
          </li>
          <li className="sash">
            <div className="sashtag">
              <label
                htmlFor="searchInput"
                className="sarch"
                onClick={handleSearch}
              >
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
      {showMenu && <Sidebar />}

      <div className="dashbody">
        <div className="bocard">
          <DashCard />
        </div>
      </div>
    </div>
  );
}
