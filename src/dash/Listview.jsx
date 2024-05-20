import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

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

const ListView = ({ items }) => {
  if (items.length === 0) {
    return <p>No items available. Please fill the form to add items.</p>;
  }

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table
        sx={{
          '&.MuiTable-root': {
            border: 'none',
          },
          '& .MuiTableCell-root': {
            border: 'none',
          },
          '& .MuiTableCell-head': {
            border: 'none',
          },
          '& .MuiTableCell-body': {
            border: 'none',
          },
        }}
      >
        <TableHead sx={{backgroundColor: '#f2f2f2'}}>
          <TableRow>
            <TableCell>Request ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Requester</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#fff" : "#f2f2f2",
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell sx={{ color: "#7a8a98", fontSize: "12px" }}>{item.productName || "N/A"}</TableCell>
              <TableCell sx={{ color: "#7a8a98", fontSize: "12px" }}>{item.qty || "N/A"}</TableCell>
              <TableCell sx={{ color: "#7a8a98", fontSize: "12px" }}>{item.amount || "N/A"}</TableCell>
              <TableCell sx={{ color: "#7a8a98", fontSize: "12px" }}>{item.requester || "N/A"}</TableCell>
              <TableCell sx={{ color: "#7a8a98", fontSize: "12px" }}>{item.department || "N/A"}</TableCell>
              <TableCell
                sx={{ fontSize: "12px", display: "flex", alignItems: "center", color: getStatusColor(item.status) }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: getStatusColor(item.status),
                    marginRight: "8px",
                  }}
                ></div>
                {item.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListView;
