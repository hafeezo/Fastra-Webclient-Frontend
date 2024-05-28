import React, { useState, useEffect } from "react";
import "./Purchreq.css";
import SearchIcon from "../../../image/search.svg";
import { FaBars, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import Listview from "./Listview";
import Newpr from "./Newpr";
import Papr from "./Papr";

export default function Purchreq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [draftCount, setDraftCount] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [items, setItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Add state for selected item

  const handleSaveAndSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
    setItems([...items, data]);
    setIsFormVisible(false);
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleNewPurchaseRequest = () => {
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
    setIsSubmitted(false);
    setIsFormVisible(false);
    setSelectedItem(null); // Hide Papr after status update
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "#2ba24c";
      case "Pending":
        return "#f0b501";
      case "Rejected":
        return "#e43e2b";
      case "Draft":
        return "#3b7ded";
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
    setDraftCount(draftCount);
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
          item.id.toLowerCase().includes(lowercasedQuery) ||
          item.productName.toLowerCase().includes(lowercasedQuery) ||
          item.qty.toLowerCase().includes(lowercasedQuery) ||
          item.amount.toLowerCase().includes(lowercasedQuery) ||
          item.requester.toLowerCase().includes(lowercasedQuery) ||
          item.date.includes(lowercasedQuery) ||
          item.status.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredItems(filtered);
    }
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="prq" id="purchase">
      <div className="prq1">
        <div className="prq2">
          <p>Purchase Requests</p>
          <div className="prqlist">
            <div className="prql1">
              <p>Draft</p>
              <p className={`plnum ${draftCount === 0 ? "zero" : ""}`}>
                {draftCount}
              </p>
            </div>
            <div className="prql2">
              <p>Approved</p>
              <p className={`plnum ${approvedCount === 0 ? "zero" : ""}`}>
                {approvedCount}
              </p>
            </div>
            <div className="prql3">
              <p>Pending</p>
              <p className={`plnum ${pendingCount === 0 ? "zero" : ""}`}>
                {pendingCount}
              </p>
            </div>
            <div className="prql4">
              <p>Rejected</p>
              <p className={`plnum ${rejectedCount === 0 ? "zero" : ""}`}>
                {rejectedCount}
              </p>
            </div>
          </div>
          <div className="prq3">
            <div className="p3a">
              <button className="p3abtn" onClick={handleNewPurchaseRequest}>
                New Purchase Request
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
            <div className="p3b">
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
            <div className="overlay">
              {!isSubmitted ? (
                <Newpr
                  onSaveAndSubmit={handleSaveAndSubmit}
                  onFormDataChange={handleFormDataChange}
                  onClose={handleFormClose}
                />
              ) : (
                <Papr
                  formData={formData}
                  onUpdateStatus={handleUpdateStatus}
                />
              )}
            </div>
          ) : selectedItem ? (
            <Papr formData={selectedItem} onUpdateStatus={handleUpdateStatus} />
          ) : viewMode === "grid" ? (
            <div className="prq4">
              {filteredItems.map((item) => (
                <div className="prq4gv" key={item.id} onClick={() => handleCardClick(item)}>
                  <p className="cardid">{item.id}</p>
                  <p className="cardnum">{item.amount}</p>
                  <p className="refname">{item.requester}</p>
                  <p className="sales">{item.department}</p>
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
