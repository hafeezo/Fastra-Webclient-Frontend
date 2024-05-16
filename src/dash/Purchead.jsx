import React, { useState } from "react";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import "./Purchead.css";
import admin from "../image/admin.svg";
import { Link } from "react-router-dom";

export default function Purchead() {
  const [notifications, setNotifications] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
      <div className="purhead">
        <ul className="purwrap">
          <li className="purhom" onClick={toggleMenu}>
            {showMenu ? (
              <FaTimes className="purnav" />
            ) : (
              <FaBars className="purnav" />
            )}
            <p>Purchase</p>
          </li>
          <li className="purlst">
            <div className="purlist">
            <Link to="/purchase" className="purst">Purchase Requests</Link>
            <Link to="/rfq" className="purst">RFQs</Link>
            <Link to="/pod" className="purst">Purchase Orders</Link>
            <Link to="/vend" className="purst">Vendors</Link>
            <Link to="/prod" className="purst">Products</Link></div>
          </li>
          <li className="puralert">
            <div className="purbell-icon-container">
              <FaBell className="purbell-icon" />
              {notifications > 0 && (
                <span className="purnotification-count">{notifications}</span>
              )}
            </div>
          </li>
          <li className="puradmin">
            <img src={admin} alt="admin" className="puradminimg" />
            <div className="puradminname">
              <p className="purad">Administrator</p>
            </div>
          </li>
        </ul>
      <div className={`navli ${showMenu ? "active" : ""}`}>
        <Link
          to="/dashboard"
          className="navig"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="/purchase"
          className="navig"
          onClick={() => setShowMenu(false)}
        >
          Purchase
        </Link>
        <Link
          to="/contact"
          className="navig"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
        <Link
          to="/settings"
          className="navig"
          onClick={() => setShowMenu(false)}
        >
          Setting
        </Link>
      </div>
    </div>
  );
}
