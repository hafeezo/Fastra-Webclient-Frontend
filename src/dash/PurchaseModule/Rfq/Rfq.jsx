import React, { useState, useEffect } from "react";
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
  const [items, setItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null); // Change to null to handle no data case

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };
  const handleNewRfq = () => {
    setIsFormVisible(true); // Show the form
  };

  const handleSaveAndSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setIsSubmitted(false); // Reset form submission state when closing the form
  };

  // const getCurrentDateTime = () => {
  //   const now = new Date();
  //   const date = now.toLocaleDateString();
  //   const time = now.toLocaleTimeString();
  //   return `${date} - ${time}`;
  // };

  // const items = [
  //   {
  //     id: "PR00001",
  //     vendorName: "Vendor Name",
  //     date: getCurrentDateTime(),
  //     status: "vendor selected",
  //   },
  //   {
  //     id: "PR00002",
  //     vendorName: "Vendor Name",
  //     date: getCurrentDateTime(),
  //     status: "Cancelled",
  //   },
  //   {
  //     id: "PR00003",
  //     vendorName: "Vendor Name",
  //     date: getCurrentDateTime(),
  //     status: "Awaiting vendor selection",
  //   },
  //   {
  //     id: "PR00004",
  //     vendorName: "Vendor Name",
  //     date: getCurrentDateTime(),
  //     status: "vendor selected",
  //   },
  //   {
  //     id: "PR00005",
  //     vendorName: "Vendor Name",
  //     date: getCurrentDateTime(),
  //     status: "Awaiting vendor selection",
  //   },
  //   {
  //     id: "PR00006",
  //     vendorName: "Vendor Name",
  //     date: getCurrentDateTime(),
  //     status: "Cancelled",
  //   },
  // ];

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
    const draftCount = items.filter((item) => item.status === "Draft").length;
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

  return (
    <div className="rfq" id='rfq'>
      <div className="rfq1">
        <div className="rfq2">
          <p>RFQs</p>
          <div className="rfqlist">
            <div className="rfql1">
              <p style={{lineHeight: '1rem'}}>Vendor Selected</p>
              <p className={`plnum ${approvedCount === 0 ? "zero" : ""}`}>
                {approvedCount}
              </p>
            </div>
            <div className="rfql2">
              <p style={{lineHeight: '1rem'}}>Awaiting Vendor Selection</p>
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
            <div
              className="r3b">
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
            {!isSubmitted ? (
                <Rform
                  onSaveAndSubmit={handleSaveAndSubmit}
                  onFormDataChange={handleFormDataChange}
                  onClose={handleFormClose}
                />
              ) : (
                <Rapr formData={formData} onClose={handleFormClose} />
              )}
            </div>
          ) : viewMode === "grid" ? (
            <div className="rfq4">
              {filteredItems.map((item) => (
                <div className="rfq4gv" key={item.id}>
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
                      item.vendorName
                    )}
                  </div>
                  <p className="cardate">{item.date}</p>
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
