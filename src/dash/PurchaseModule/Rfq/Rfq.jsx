import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./Rfq.css";
import SearchIcon from "../../../image/search.svg";
import { FaBars, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import RListview from "./RListview";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Rform from "./Rform";
import Rapr from "./Rapr";

export default function Rfq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("rfqs")) || [];
    return storedItems;
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentFormData, setCurrentFormData] = useState(null); // Renamed state
  const [selectedItem, setSelectedItem] = useState(null); // Add state for selected item
  const [initialFormData, setInitialFormData] = useState(null);

  const location = useLocation();
  const locationFormData = location.state?.formData;

  useEffect(() => {
    if (locationFormData) {
      // Logic to autofill form
      setInitialFormData(locationFormData);
      setIsFormVisible(true); // Open the form with the initial data
    }
  }, [locationFormData]);

  const handleSaveAndSubmit = (data) => {
    const updatedItems = [...items, data];
    setCurrentFormData(data);
    setIsSubmitted(true);
    setItems(updatedItems);
    localStorage.setItem("rfqs", JSON.stringify(updatedItems));
    setIsFormVisible(false);
  };

  const handleFormDataChange = (data) => {
    setCurrentFormData(data);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleNewRfq = () => {
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setIsSubmitted(false);
  };

  const handleUpdateStatus = (id, status) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, status: status } : item
    );
    setItems(updatedItems);
    localStorage.setItem("rfqs", JSON.stringify(updatedItems));
    setIsSubmitted(false);
    setIsFormVisible(false);
    setSelectedItem(null); // Hide Rapr after status update
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "vendor selected":
        return "#2ba24c";
      case "Awaiting vendor selection":
        return "#f0b501";
      case "Cancelled":
        return "#e43e2b";
      default:
        return "#7a8a98";
    }
  };

  const updateCounts = (items) => {
    const approvedCount = items.filter(
      (item) => item.status === "Approved"
    ).length;
    const pendingCount = items.filter(
      (item) => item.status === "Pending"
    ).length;
    const rejectedCount = items.filter(
      (item) => item.status === "Rejected"
    ).length;
    setApprovedCount(approvedCount);
    setPendingCount(pendingCount);
    setRejectedCount(rejectedCount);
  };

  useEffect(() => {
    updateCounts(items);
    setFilteredItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

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

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="rfq" id="rfq">
      <div className="rfq1">
        <div className="rfq2">
          <p>RFQs</p>
          <div className="rfqlist">
            <div className="rfql1">
              <p style={{ lineHeight: "1rem" }}>Vendor Selected</p>
              <p className={`plnum ${approvedCount === 0 ? "zero" : ""}`}>
                {approvedCount}
              </p>
            </div>
            <div className="rfql2">
              <p style={{ lineHeight: "1rem" }}>Awaiting Vendor Selection</p>
              <p className={`plnum ${pendingCount === 0 ? "zero" : ""}`}>
                {pendingCount}
              </p>
            </div>
            <div className="rfql3">
              <p>Cancelled</p>
              <p className={`plnum ${rejectedCount === 0 ? "zero" : ""}`}>
                {rejectedCount}
              </p>
            </div>
          </div>
          <div className="rfq3">
            <div className="r3a">
              <button className="r3abtn" onClick={handleNewRfq}>
                New RFQ
              </button>
              <div className="rfqsash">
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
            <div className="r3b">
              <p className="r3bpage">1-2 of 2</p>
              <div className="r3bnav">
                <FaCaretLeft className="lr" />
                <div className="stroke"></div>
                <FaCaretRight className="lr" />
              </div>
              <div className="r3bview">
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
            <div className="overlay">
              <Rform
                onSaveAndSubmit={handleSaveAndSubmit}
                onFormDataChange={handleFormDataChange}
                onClose={handleFormClose}
                initialData={initialFormData} // Pass the initial data here
              />
            </div>
          ) : selectedItem ? (
            <div className="overlay">
              <Rapr
                formData={selectedItem}
                onUpdateStatus={handleUpdateStatus}
              />
            </div>
          ) : viewMode === "grid" ? (
            <div className="rfq4">
              {filteredItems.map((item) => (
                <div
                  className="rfq4gv"
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                >
                  <p className="cardid">{item.id}</p>
                  <div className="vendname">
                    {item.status === "Awaiting vendor selection" ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "blue",
                        }}
                      >
                        <span style={{ color: "blue" }}>Select Vendor</span>
                        <IconButton style={{ color: "blue" }}>
                          <ArrowDropDownIcon />
                        </IconButton>
                      </div>
                    ) : (
                      item.vendor
                    )}
                  </div>
                  <p className="cardate">{formatDate(item.date)}</p>
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
            <RListview items={filteredItems} />
          )}
        </div>
      </div>
    </div>
  );
}

