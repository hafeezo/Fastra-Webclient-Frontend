import React, { useState, useEffect } from "react";
import "../Purchreq.css";
import Header from "../Purchead";
import SearchIcon from "../../image/search.svg";
import { FaBars, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import Listview from "../Listview";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Rform from "./Rform";

export default function Rfq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [approvedCount, setApprovedCount] = useState(12);
  const [pendingCount, setPendingCount] = useState(12);
  const [rejectedCount, setRejectedCount] = useState(12);
  const [viewMode, setViewMode] = useState("grid");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} - ${time}`;
  };

  const items = [
    {
      id: "PR00001",
      vendorName: "Vendor Name",
      date: getCurrentDateTime(),
      status: "vendor selected",
    },
    {
      id: "PR00002",
      vendorName: "Vendor Name",
      date: getCurrentDateTime(),
      status: "Cancelled",
    },
    {
      id: "PR00003",
      vendorName: "Vendor Name",
      date: getCurrentDateTime(),
      status: "Awaiting vendor selection",
    },
    {
      id: "PR00004",
      vendorName: "Vendor Name",
      date: getCurrentDateTime(),
      status: "vendor selected",
    },
    {
      id: "PR00005",
      vendorName: "Vendor Name",
      date: getCurrentDateTime(),
      status: "Awaiting vendor selection",
    },
    {
      id: "PR00006",
      vendorName: "Vendor Name",
      date: getCurrentDateTime(),
      status: "Cancelled",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "vendor selected":
        return "#2ba24c"; // Green color
      case "Awaiting vendor selection":
        return "#f0b501"; // Yellow color
      case "Cancelled":
        return "#e43e2b"; // Red color
      default:
        return "#7a8a98"; // Default color for other statuses
    }
  };

  const incrementCounts = () => {
    const increment = 1;
    const interval = 100;
    let currentApprovedCount = 0;
    let currentPendingCount = 0;
    let currentRejectedCount = 0;

    const approvedInterval = setInterval(() => {
      if (currentApprovedCount <= 12) {
        // Change the final value here
        setApprovedCount(currentApprovedCount);
        currentApprovedCount += increment;
      } else {
        clearInterval(approvedInterval);
      }
    }, interval);

    const pendingInterval = setInterval(() => {
      if (currentPendingCount <= 12) {
        // Change the final value here
        setPendingCount(currentPendingCount);
        currentPendingCount += increment;
      } else {
        clearInterval(pendingInterval);
      }
    }, interval);

    const rejectedInterval = setInterval(() => {
      if (currentRejectedCount <= 12) {
        // Change the final value here
        setRejectedCount(currentRejectedCount);
        currentRejectedCount += increment;
      } else {
        clearInterval(rejectedInterval);
      }
    }, interval);
  };

  useEffect(() => {
    incrementCounts();
    setFilteredItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    if (searchQuery === "") {
      setFilteredItems(items);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = items.filter(
        (item) =>
          item.vendorName.toLowerCase().includes(lowercasedQuery) ||
          item.date.includes(lowercasedQuery) ||
          item.status.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredItems(filtered);
    }
  };

  const handleNewRfq = () => {
    setIsFormVisible(true); // Show the form
  };

  const handleFormSubmit = (formData) => {
    // Here you can handle the form data (e.g., send it to an API)
    console.log("Form data submitted:", formData);
    setIsFormVisible(false); // Hide the form and show the cards view
  };

  const handleFormClose = () => {
    setIsFormVisible(false); // Close the form without submitting
  };

  return (
    <div className="prq" id='rfq'>
      <Header />
      <div className="prq1">
        <div className="prq2">
          <p>RFQs</p>
          <div className="prqlist">
            <div className="prql2">
              <p>Vendor Selected</p>
              <p className={`plnum ${approvedCount === 0 ? "zero" : ""}`}>
                {approvedCount}
              </p>
            </div>
            <div className="prql5">
              <p>Awaiting Vendor Selection</p>
              <p className={`plnum ${pendingCount === 0 ? "zero" : ""}`}>
                {pendingCount}
              </p>
            </div>
            <div className="prql4">
              <p>Cancelled</p>
              <p className={`plnum ${rejectedCount === 0 ? "zero" : ""}`}>
                {rejectedCount}
              </p>
            </div>
          </div>
          <div className="prq3">
            <div className="p3a">
              <button className="p3abtn" onClick={handleNewRfq}>
                New RFQ
              </button>
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
            <div
              className="p3b
"
            >
              <p className="p3bpage">1-2 of 2</p>
              <div className="p3bnav">
                <FaCaretLeft className="lr" />
                <div className="stroke"></div>
                <FaCaretRight className="lr" />
              </div>
              <div className="p3bview">
                <IoGrid
                  className={`grid ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => toggleViewMode("grid")}
                />
                <div className="stroke"></div>
                <FaBars
                  className={`grid ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => toggleViewMode("list")}
                />
              </div>
            </div>
          </div>
          {isFormVisible ? (
            <Rform onClose={handleFormClose} onSubmit={handleFormSubmit} />
          ) : viewMode === "grid" ? (
            <div className="prq4">
              {filteredItems.map((item) => (
                <div className="prq4gv" key={item.id}>
                  <p className="cardid">{item.id}</p>
                  <p className="vendorname">
                    {item.status === "Awaiting vendor selection" ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "blue",
                        }}
                      >
                        <span style={{ color: "blue" }}>Select Vendor</span>
                        <IconButton style={{ color: "blue" }}>
                          <ArrowDropDownIcon />
                        </IconButton>
                      </div>
                    ) : (
                      item.vendorName
                    )}
                  </p>
                  <p className="carddate">{item.date}</p>
                  <p
                    className="status"
                    style={{ color: getStatusColor(item.status) }}
                  >
                    <strong
                      style={{
                        fontSize: "20px",
                        color: getStatusColor(item.status),
                      }}
                    >
                      &#x2022;
                    </strong>{" "}
                    {item.status}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <Listview items={filteredItems} />
          )}
        </div>
      </div>
    </div>
  );
}
