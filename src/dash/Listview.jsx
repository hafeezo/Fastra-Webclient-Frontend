import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
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

const columns = [
  { field: 'requestId', headerName: 'Request ID', width: 150 },
  { 
    field: 'productName', 
    headerName: 'Product Name', 
    width: 250,
    renderCell: (params) => {
      const productNames = params.value.split(',');
      if (productNames.length > 1) {
        return (
          <Accordion style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              {productNames[0]}
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: 'column', overflowY: 'auto', maxHeight: '150px' }}>
              {productNames.slice(1).map((productName, index) => (
                <div key={index}>{productName}</div>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      } else {
        return productNames[0];
      }
    }
  },
  { 
    field: 'qty', 
    headerName: 'Qty', 
    type: 'number', 
    width: 150,
    renderCell: (params) => {
      const quantities = params.value.split(',');
      if (quantities.length > 1) {
        return (
          <Accordion style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              {quantities[0]}
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: 'column', overflowY: 'auto', maxHeight: '150px' }}>
              {quantities.slice(1).map((qty, index) => (
                <div key={index}>{qty}</div>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      } else {
        return quantities[0];
      }
    }
  },
  { field: 'amount', headerName: 'Amount', type: 'number', width: 180 }, // Increased width
  { field: 'spacer', headerName: '', width: 50 }, // Spacer column
  { field: 'requester', headerName: 'Requester', width: 250 },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 150,
    renderCell: (params) => {
      const color = getStatusColor(params.value);
      return (
        <div style={{ display: 'flex', alignItems: 'center', color }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: color,
            marginRight: '8px'
          }}></div>
          {params.value}
        </div>
      );
    }
  },
];

const rows = [
  { id: generateId(), requestId: 'PR00001', productName: 'Laptop, Keyboard & Mouse, Monitor, gun, pistol, sword, spear, arrow, food', qty: '4, 4, 1, 2, 3, 5, 6, 2, 9', amount: 2600000, requester: 'Firstname Lastname', status: 'Approved' }, 
  { id: generateId(), requestId: 'PR00002', productName: 'Laptop', qty: '4', amount: 2400000, requester: 'Firstname Lastname', status: 'Pending' },
  { id: generateId(), requestId: 'PR00003', productName: 'Keyboard & Mouse', qty: '4', amount: 200000, requester: 'Firstname Lastname', status: 'Rejected' },
  { id: generateId(), requestId: 'PR00004', productName: 'Laptop', qty: '4', amount: 2400000, requester: 'Firstname Lastname', status: 'Draft' },
];

export default function DataTable() {
  const getRowClassName = (params) => {
    return params.index % 2 === 0 ? 'evenRow' : 'oddRow';
  };

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        autoHeight
        getRowClassName={getRowClassName}
        sx={{
          '& .evenRow': {
            backgroundColor: '#fff',
          },
          '& .oddRow': {
            backgroundColor: '#f2f2f2',
          },
          '& .MuiDataGrid-cell': {
            padding: '16px',
            display: 'flex',
            alignItems: 'center', 
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#f5f5f5',
          },
          '& .MuiDataGrid-cellContent': {
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
}
