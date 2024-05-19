import React, { useState, useEffect } from "react";
import "./Purchreq.css";
import SearchIcon from "../image/search.svg";
import { FaBars, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import Listview from "./Listview";
import Newpr from "./Newpr";

export default function Purchreq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [draftCount, setDraftCount] = useState(12);
  const [approvedCount, setApprovedCount] = useState(12);
  const [pendingCount, setPendingCount] = useState(12);
  const [rejectedCount, setRejectedCount] = useState(12);
  const [viewMode, setViewMode] = useState("grid");
  // const [items, setItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleNewPurchaseRequest = (newItem) => {
    // setItems([...items, newItem]);
    setIsFormVisible(true); // Show the form
  };
  const handleSubmit = (data) => {
    // Here you can handle the form data (e.g., send it to an API)
    console.log("Submitted data received in Purchreq:", data);
    setSubmittedData(data);
    // setItems([...items, ...data]);
    setIsFormVisible(false);
  };
  console.log("Submitted data in Purchreq:", submittedData);
  const handleFormClose = () => {
    setIsFormVisible(false); // Close the form without submitting
  };

  const items = [
    {
      id: "PR00001",
      productName: "Product Name",
      amount: "2,600,000",
      requester: "Firstname Lastname",
      deparment: "sales",
      status: "Approved",
    },
    {
      id: "PR00002",
      productName: "Product Name",
      amount: "2,400,000",
      requester: "Firstname Lastname",
      deparment: "sales",
      status: "Pending",
    },
    {
      id: "PR00003",
      productName: "Product Name",
      amount: "200,000",
      requester: "Firstname Lastname",
      deparment: "sales",
      status: "Rejected",
    },
    {
      id: "PR00004",
      productName: "Product Name",
      amount: "2,400,000",
      requester: "Firstname Lastname",
      deparment: "sales",
      status: "Approved",
    },
    {
      id: "PR00005",
      productName: "Product Name",
      amount: "2,400,000",
      requester: "Firstname Lastname",
      deparment: "sales",
      status: "Draft",
    },
    {
      id: "PR00006",
      productName: "Product Name",
      amount: "2,400,000",
      requester: "Firstname Lastname",
      deparment: "sales",
      status: "Rejected",
    },
  ];
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

  const incrementCounts = () => {
    const increment = 1;
    const interval = 100; // Interval in milliseconds
    let currentDraftCount = 0;
    let currentApprovedCount = 0;
    let currentPendingCount = 0;
    let currentRejectedCount = 0;

    const draftInterval = setInterval(() => {
      if (currentDraftCount <= 12) {
        // Change the final value here
        setDraftCount(currentDraftCount);
        currentDraftCount += increment;
      } else {
        clearInterval(draftInterval);
      }
    }, interval);

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
          item.id.toLowerCase().includes(lowercasedQuery) ||
          item.productName.toLowerCase().includes(lowercasedQuery) ||
          item.requester.toLowerCase().includes(lowercasedQuery) ||
          item.date.includes(lowercasedQuery) ||
          item.status.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="prq" id='rfq'>
      <div className="prq1">
        <div className="prq2">
          <p>RFQs</p>
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
            <div className='overlay'>
            <Newpr onClose={handleFormClose} onAddItem={handleNewPurchaseRequest}
              onSubmit={handleSubmit} /></div>
          ) : viewMode === "grid" ? (
            <div className="prq4">
              {filteredItems.map((item) => (
                <div className="prq4gv" key={item.id}>
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
