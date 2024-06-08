import React, { useState } from "react";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./Purchead.css";
import admin from "../../image/admin.svg";
import { NavLink } from "react-router-dom";

export default function Purchead() {
  const [notifications, setNotifications] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [click, setClick] = useState(false);
  console.log("Purchead rendered"); // Log to confirm rendering
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  
  const handleLinkClick = () => {
    setClick(false);
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
            <NavLink
              exact
              to="/purchase"
              className="purst"
              activeClassName="active"
            >
              Purchase Requests
            </NavLink>
            <NavLink exact to="/rfq" className="purst" activeClassName="active">
              RFQs
            </NavLink>
            <NavLink exact to="/pod" className="purst" activeClassName="active">
              Purchase Orders
            </NavLink>
            <div className="prodrop">
              <NavLink
                exact
                to="/vend"
                className="purst"
                activeClassName="active"
              >
                <p className="p2">
                  Vendor
                  <IoIosArrowDown className="ardan" />
                </p>
              </NavLink>
              <div className="prolst">
                <NavLink to="/varcat" className="dropdown-link" onClick={handleLinkClick}>
                  Vendor Category
                </NavLink>
              </div>
            </div>
            <NavLink
              exact
              to="/prod"
              className="purst"
              activeClassName="active"
            >
              Products
            </NavLink>
          </div>
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
        <NavLink
          exact
          to="/dashboard"
          className="navig"
          activeClassName="active"
          onClick={() => setShowMenu(false)}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="navig"
          activeClassName="active"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </NavLink>
        <NavLink
          exact
          to="/settings"
          className="navig"
          activeClassName="active"
          onClick={() => setShowMenu(false)}
        >
          Setting
        </NavLink>
      </div>
    </div>
  );
}