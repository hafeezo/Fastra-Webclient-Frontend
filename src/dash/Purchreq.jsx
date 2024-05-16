import React, { useState } from "react";
import "./Purchreq.css";
import SearchIcon from "../image/search.svg";
import { FaBars, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

export default function Purchreq() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    // You can perform search operations here based on the search query
    // For example, you can filter a list of items based on the search query
  };
  return (
    <div className="prq">
      <div className="prq1">
        <div className="prq2">
          <p>Purchase Requests</p>
          <div className="prqlist">
            <div className="prql1">
              <p>Draft</p>
              <p className="plnum">12</p>
            </div>
            <div className="prql2">
              <p>Approved</p>
              <p className="plnum">12</p>
            </div>
            <div className="prql3">
              <p>Pending</p>
              <p className="plnum">12</p>
            </div>
            <div className="prql4">
              <p>Rejected</p>
              <p className="plnum">12</p>
            </div>
          </div>
          <div className="prq3">
            <div className="p3a">
              <p className="p3abtn">New Purchase request</p>
              <div className="prqsash">
                <label
                  htmlFor="searchInput"
                  className="ps1"
                  onClick={handleSearch}
                >
                  <img src={SearchIcon} alt="Search" className="ps2" />
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="ps3"
                  />
                </label>
              </div>
            </div>
            <div className="p3b">
              <p className="p3bpage">1-2 of 2</p>
              <div className="p3bnav">
                <FaCaretLeft className="lr"/>
                <FaCaretRight className="lr"/>
              </div>
              <div className="p3bview">
                <IoGrid className="grid"/>
                <FaBars className="grid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
