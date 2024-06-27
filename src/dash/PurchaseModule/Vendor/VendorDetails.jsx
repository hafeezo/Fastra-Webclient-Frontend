import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./VendorDetails.css";

const VendorDetails = ({ onClose, showForm, handleSubmit, onSave }) => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [filteredRfqs, setFilteredRfqs] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    const vendors = JSON.parse(localStorage.getItem("vendors")) || [];
    const rfqs = JSON.parse(localStorage.getItem("rfqs")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const selectedVendor = vendors.find((vendor) => vendor.id === id);
    setVendor(selectedVendor);

    const vendorRfqs = rfqs.filter((rfq) => rfq.vendorId === id);
    const vendorOrders = orders.filter((order) => order.vendorId === id);

    setFilteredRfqs(vendorRfqs);
    setFilteredOrders(vendorOrders);
    setFormState({ ...selectedVendor });
  }, [id]);

  if (!vendor) {
    return <div>Loading...</div>;
  }

  const rfqColumns = [
    { field: "rfqId", headerName: "RFQ ID", width: 150 },
    {
      field: "product",
      headerName: "Product Name",
      width: 250,
      renderCell: (params) => {
        const productNames = params.value.split(",");
        if (productNames.length > 1) {
          return (
            <Accordion
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {productNames[0]}
              </AccordionSummary>
              <AccordionDetails
                style={{
                  flexDirection: "column",
                  overflowY: "auto",
                  maxHeight: "150px",
                }}
              >
                {productNames.slice(1).map((productName, index) => (
                  <div key={index}>{productName}</div>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return productNames[0];
        }
      },
    },
    {
      field: "quantity",
      headerName: "Qty",
      type: "number",
      width: 150,
      renderCell: (params) => {
        const quantities = params.value.split(",");
        if (quantities.length > 1) {
          return (
            <Accordion
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {quantities[0]}
              </AccordionSummary>
              <AccordionDetails
                style={{
                  flexDirection: "column",
                  overflowY: "auto",
                  maxHeight: "150px",
                }}
              >
                {quantities.slice(1).map((qty, index) => (
                  <div key={index}>{qty}</div>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return quantities[0];
        }
      },
    },
    { field: "dateOpened", headerName: "Date Opened", width: 180 },
    { field: "expiryDate", headerName: "Expiry Date", width: 180 },
    {
      field: "vendor",
      headerName: "Vendor",
      width: 250,
      renderCell: (params) => {
        if (params.row.status === "Awaiting Vendor Selection") {
          return (
            <div
              style={{ display: "flex", alignItems: "center", color: "blue" }}
            >
              <span style={{ color: "blue" }}>Select Vendor</span>
              <IconButton style={{ color: "blue" }}>
                <ArrowDropDownIcon />
              </IconButton>
            </div>
          );
        } else {
          return params.value;
        }
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const color = getStatusColor(params.value);
        return (
          <div style={{ display: "flex", alignItems: "center", color }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: color,
                marginRight: "8px",
              }}
            ></div>
            {params.value}
          </div>
        );
      },
    },
  ];

  const orderColumns = [
    { field: "poId", headerName: "Purchase Order ID", width: 150 },
    {
      field: "product",
      headerName: "Product Name",
      width: 250,
      renderCell: (params) => {
        const productNames = params.value.split(",");
        if (productNames.length > 1) {
          return (
            <Accordion
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {productNames[0]}
              </AccordionSummary>
              <AccordionDetails
                style={{
                  flexDirection: "column",
                  overflowY: "auto",
                  maxHeight: "150px",
                }}
              >
                {productNames.slice(1).map((productName, index) => (
                  <div key={index}>{productName}</div>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return productNames[0];
        }
      },
    },
    {
      field: "quantity",
      headerName: "Qty",
      type: "number",
      width: 150,
      renderCell: (params) => {
        const quantities = params.value.split(",");
        if (quantities.length > 1) {
          return (
            <Accordion
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {quantities[0]}
              </AccordionSummary>
              <AccordionDetails
                style={{
                  flexDirection: "column",
                  overflowY: "auto",
                  maxHeight: "150px",
                }}
              >
                {quantities.slice(1).map((qty, index) => (
                  <div key={index}>{qty}</div>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return quantities[0];
        }
      },
    },
    { field: "dateCreated", headerName: "Date Created", width: 180 },
    { field: "vendor", headerName: "Vendor", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const color = getStatusColor(params.value);
        return (
          <div style={{ display: "flex", alignItems: "center", color }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: color,
                marginRight: "8px",
              }}
            ></div>
            {params.value}
          </div>
        );
      },
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Vendor Selected":
        return "#2ba24c";
      case "Awaiting Vendor Selection":
        return "#f0b501";
      case "Order Completed":
        return "#2ba24c";
      case "Awaiting Goods":
        return "#f0b501";
      default:
        return "#7a8a98";
    }
  };

  const handleSave = () => {
    onSave(formState);
    setEditMode(false);
  };

  return (
    <div id="VendorDetails" className={`nvr ${showForm ? "fade-in" : "fade-out"}`}>
      <div className="nvr1">
        <div className="nvr2" style={{ marginBottom: "35px" }}>
          <div className="nvr2b">
            <p className="p3bpage">1-2 of 2</p>
            <div className="nvrbnav">
              <FaCaretLeft className="nr" />
              <div className="sep"></div>
              <FaCaretRight className="nr" />
            </div>
          </div>
        </div>
        <div className="nvr3">
          <form className="nvrform" onSubmit={handleSubmit}>
            <div className="prodet2a">
              <p style={{ fontSize: "20px" }}>Basic Information</p>
              <button
                type="button"
                className="nvr3but"
                onClick={onClose}
                style={{ marginTop: "1rem" }}
              >
                Cancel
              </button>
              {editMode ? (
                <button
                  type="button"
                  className="prodet2btn"
                  onClick={handleSave}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className="prodet2btn"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </button>
              )}
            </div>
            <div className="nvr3c">
              <div className="nvr3ca">
                <label>Vendor Name</label>
                <p>{vendor.vendorName}</p>
              </div>
              <div className="nvr3ca">
                <label>Category</label>
                <p>{vendor.category}</p>
              </div>
              <div className="nvr3ca">
                <label>Email Address</label>
                <p>{vendor.email}</p>
              </div>
              <div className="nvr3ca">
                <label>Phone Number</label>
                <p>{vendor.phone}</p>
              </div>
              <div className="nvr3ca">
                <label>Address</label>
                <p>{vendor.address}</p>
              </div>
            </div>
            <div className="nvr3c">
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={filteredRfqs}
                  columns={rfqColumns}
                  pageSize={5}
                  disableColumnFilter={!editMode} // Disable column filter when not in edit mode
                />
              </div>
            </div>
            <div className="nvr3c">
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={filteredOrders}
                  columns={orderColumns}
                  pageSize={5}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
