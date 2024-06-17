import React from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaDollarSign,
  FaIndustry,
  FaWarehouse,
  FaUsers,
  FaAddressBook,
  FaCogs,
} from "react-icons/fa";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src="logo.png" alt="Logo" className="sidebar-logo" />
        <span className="sidebar-title">fastra suite</span>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-item selected">
          <FaTachometerAlt className="sidebar-icon" />
          <span>Dashboard</span>
        </div>
        <div className="sidebar-item">
          <FaBook className="sidebar-icon" />
          <span>Books</span>
        </div>
        <div className="sidebar-item">
          <FaDollarSign className="sidebar-icon" />
          <span>Sell</span>
        </div>
        <div className="sidebar-item">
          <FaIndustry className="sidebar-icon" />
          <span>Source</span>
        </div>
        <div className="sidebar-item">
          <FaWarehouse className="sidebar-icon" />
          <span>Stock</span>
        </div>
        <div className="sidebar-item">
          <FaUsers className="sidebar-icon" />
          <span>Talent</span>
        </div>
        <div className="sidebar-item">
          <FaAddressBook className="sidebar-icon" />
          <span>Contacts</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <FaCogs className="sidebar-icon" />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
