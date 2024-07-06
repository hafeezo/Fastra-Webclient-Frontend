import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Rfq.css";
import SearchIcon from "../../../image/search.svg";
import { FaBars, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import RListview from "./RListview";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Rform from "./Rform";
import Rapr from "./Rapr";
import { getVendors, getCategories } from "../Vendor/Vend";

export default function Rfq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [vendorSelectedCount, setVendorSelectedCount] = useState(0);
  const [awaitingVendorSelectionCount, setAwaitingVendorSelectionCount] =
    useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("rfqs")) || [];
    return storedItems;
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items); // Initialize with items
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentFormData, setCurrentFormData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [initialFormData, setInitialFormData] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (items) {
        const vendorsData = getVendors(items);
        const categoriesData = getCategories(items);
        setVendors(vendorsData);
        setCategories(categoriesData);
        updateCounts(items); // Update counts after fetching data
      }
    };
    fetchData();
  }, [items]);

  const location = useLocation();
  const locationFormData = location.state?.formData;

  useEffect(() => {
    if (locationFormData) {
      setInitialFormData(locationFormData);
      setIsFormVisible(true);
    }
  }, [locationFormData]);

  const handleSaveAndSubmit = (data) => {
    const updatedItems = [...items, data];
    setCurrentFormData(data);
    setIsSubmitted(true);
    setItems(updatedItems);
    localStorage.setItem("rfqs", JSON.stringify(updatedItems));
    setIsFormVisible(false);
    updateCounts(updatedItems); // Update counts after adding new item
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
    setSelectedItem(null);
    updateCounts(updatedItems); // Update counts after status change
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Vendor selected":
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
    const vendorSelectedCount = items.filter(
      (item) => item.status === "Vendor selected"
    ).length;
    const awaitingVendorSelectionCount = items.filter(
      (item) => item.status === "Awaiting vendor selection"
    ).length;
    const cancelledCount = items.filter(
      (item) => item.status === "Cancelled"
    ).length;
    setVendorSelectedCount(vendorSelectedCount);
    setAwaitingVendorSelectionCount(awaitingVendorSelectionCount);
    setCancelledCount(cancelledCount);
  };

  useEffect(() => {
    updateCounts(items); // Initial count update on component mount
    setFilteredItems(items); // Ensure filteredItems is updated initially
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
              <p className={`plnum ${vendorSelectedCount === 0 ? "zero" : ""}`}>
                {vendorSelectedCount}
              </p>
            </div>
            <div className="rfql2">
              <p style={{ lineHeight: "1rem" }}>Awaiting Vendor Selection</p>
              <p
                className={`plnum ${
                  awaitingVendorSelectionCount === 0 ? "zero" : ""
                }`}
              >
                {awaitingVendorSelectionCount}
              </p>
            </div>
            <div className="rfql3">
              <p>Cancelled</p>
              <p className={`plnum ${cancelledCount === 0 ? "zero" : ""}`}>
                {cancelledCount}
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
                initialData={initialFormData}
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
                    className="carstatus"
                    style={{ color: getStatusColor(item.status) }}
                  >
                    {item.status}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rfq5">
              {filteredItems.map((item) => (
                <RListview
                  key={item.id}
                  data={item}
                  onCardClick={() => handleCardClick(item)}
                  getStatusColor={getStatusColor}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
