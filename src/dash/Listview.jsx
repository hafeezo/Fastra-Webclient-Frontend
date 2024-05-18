import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const getStatusColor = (status) => {
  switch (status) {
    case "Vendor selected":
      return "#2ba24c";
    case "Awaiting vendors selection":
      return "#f0b501";
    case "Cancelled":
      return "#e43e2b";
    default:
      return "#7a8a98";
  }
};

const columns = [
  { field: "requestId", headerName: "Request ID", width: 150 },
  {
    field: "productName",
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
    field: "qty",
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
      if (params.row.status === "Awaiting vendors selection") {
        return (
          <div style={{ display: "flex", alignItems: "center", color: "blue" }}>
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

const rows = [
  {
    id: generateId(),
    requestId: "PR00001",
    productName: "Laptop, Keyboard & Mouse",
    qty: "4, 4, 1, 2, 3, 5, 6, 2, 9",
    dateOpened: "2024-05-01",
    expiryDate: "2024-08-01",
    vendor: "Vendor Name",
    status: "Vendor selected",
  },
  {
    id: generateId(),
    requestId: "PR00002",
    productName: "Laptop",
    qty: "4",
    dateOpened: "2024-05-02",
    expiryDate: "2024-08-02",
    vendor: "",
    status: "Awaiting vendors selection",
  },
  {
    id: generateId(),
    requestId: "PR00003",
    productName: "Keyboard & Mouse",
    qty: "4",
    dateOpened: "2024-05-03",
    expiryDate: "2024-08-03",
    vendor: "Vendor Name",
    status: "Cancelled",
  },
  {
    id: generateId(),
    requestId: "PR00004",
    productName: "Laptop, Keyboard & Mouse",
    qty: "4, 4, 1, 2, 3, 5, 6, 2, 9",
    dateOpened: "2024-05-01",
    expiryDate: "2024-08-01",
    vendor: "",
    status: "Awaiting vendors selection",
  },
  {
    id: generateId(),
    requestId: "PR00005",
    productName: "Laptop",
    qty: "4",
    dateOpened: "2024-05-02",
    expiryDate: "2024-08-02",
    vendor: "Vendor Name",
    status: "Vendor selected",
  },
  {
    id: generateId(),
    requestId: "PR00006",
    productName: "Keyboard & Mouse",
    qty: "4",
    dateOpened: "2024-05-03",
    expiryDate: "2024-08-03",
    vendor: "",
    status: "Awaiting vendors selection",
  },
];

export default function DataTable() {
  const getRowClassName = (params) => {
    return params.indexRelativeToCurrentPage % 2 === 0 ? "evenRow" : "oddRow";
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        autoHeight
        getRowClassName={getRowClassName}
        sx={{
          "& .MuiDataGrid-row.evenRow": {
            backgroundColor: "#f2f2f2",
          },
          "& .MuiDataGrid-row.oddRow": {
            backgroundColor: "#fff",
          },
          "& .MuiDataGrid-cell": {
            padding: "16px",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#f5f5f5",
          },
          "& .MuiDataGrid-cellContent": {
            fontSize: "14px",
          },
        }}
      />
    </div>
  );
}
