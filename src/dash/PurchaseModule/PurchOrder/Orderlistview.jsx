import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const getStatusColor = (status) => {
  switch (status) {
    case "Order Approved":
      return "#2ba24c";
    case "Awaiting goods":
      return "#f0b501";
    case "Cancelled":
      return "#e43e2b";
    default:
      return "#7a8a98";
  }
};

const columns = (handleRowClick) => [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "productName",
    headerName: "Product Name",
    width: 250,
    renderCell: (params) => {
      const productNames = params.value ? params.value.split(",") : [];
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
    width: 150,
    renderCell: (params) => {
      const quantities = params.value ? params.value.split(",") : [];
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
  {
    field: "vendor",
    headerName: "Vendor",
    width: 250,
    renderCell: (params) => {
      if (params.row.status === "Awaiting goods") {
        return (
          <div style={{ display: "flex", alignItems: "center", color: "blue" }}>
            <IconButton style={{ color: "blue" }}>
              {/* Placeholder for vendor selection */}
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

export default function Orderlistview({ items, handleRowClick }) {
  const getRowClassName = (params) => {
    return params.index % 2 === 0 ? "evenRow" : "oddRow";
  };

  const rows = items.map((item) => ({
    id: item.id,
    productName: item.productName,
    qty: item.qty, // Ensure qty is being correctly mapped
    dateCreated: item.date,
    vendor: item.vendor,
    status: item.status,
  }));

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns(handleRowClick)}
        pageSize={5}
        checkboxSelection
        autoHeight
        getRowClassName={getRowClassName}
        onRowClick={(params) => handleRowClick(params.row)}
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
