import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "./Newpr.css";
import autosave from "../image/autosave.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Newpr({ onClose, onAddItem, onSubmit }) {
  // const [formData, setFormData] = useState([]);

  const [rows, setRows] = useState([
    {
      productName: "",
      description: "",
      qty: "",
      unitPrice: "",
      totalPrice: "",
    },
  ]);

  const [page, setPage] = useState(0);
  const rowsPerPage = 3;
  const [showForm, setShowForm] = useState(true); // Define showForm state variable

  const handleInputChange = (index, key, value) => {
    const newRows = [...rows];
    newRows[index][key] = value;
    if (key === "qty" || key === "unitPrice") {
      newRows[index]["totalPrice"] = (
        newRows[index]["qty"] * newRows[index]["unitPrice"]
      ).toFixed(2);
    }
    setRows(newRows);
  };

  const handleSave = () => {
    // Save the input data to a global state, local storage, or an API
    console.log("Input data saved:", rows);
  };

  // Function to handle saving and submitting data
  const handleSaveAndSubmit = () => {
    // Process the form data as needed
    console.log("Input data submitted:", rows);

    // Call the onSubmit function passed from the parent component
    onSubmit(rows);
    onClose();
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        productName: "",
        description: "",
        qty: "",
        unitPrice: "",
        totalPrice: "",
      },
    ]);
  };

  const handleNextPage = () => {
    if ((page + 1) * rowsPerPage < rows.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const currentRows = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  const pageCount = Math.ceil(rows.length / rowsPerPage);
  console.log("showForm:", showForm);

  return (
    <div id="npr" className={`npr ${showForm ? "fade-in" : "fade-out"}`}>
      <div className="npr1">
        <div className="npr2">
          <div className="npr2a">
            <p className="nprhed">New Purchase Request</p>
            <div className="nprauto">
              <p>Autosaved</p>
              <img src={autosave} alt="Autosaved" />
            </div>
          </div>
          <div className="npr2b">
            <p className="nprbpg">
              {page + 1}-{pageCount} of {pageCount}
            </p>
            <div className="nprbnav">
              <FaCaretLeft className="nr" onClick={handlePreviousPage} />
              <div className="sep"></div>
              <FaCaretRight className="nr" onClick={handleNextPage} />
            </div>
          </div>
        </div>
        <div className="npr3">
          <form className="nprform">
            <div className="npr3a">
              <p style={{ fontSize: "20px" }}>Basic Information</p>
              <button
                type="button"
                className="npr3but"
                onClick={onClose} // Use the onClose function directly
                style={{ marginTop: "1rem" }}
              >
                Cancel
              </button>
            </div>

            <div className="npr3b">
              <div className="npr3ba">
                <p>ID</p>
                <p style={{ fontSize: "14px", color: "#7a8a98" }}>PR00001</p>
              </div>
              <div className="npr3bb">
                <p>Date</p>
                <p style={{ fontSize: "14px", color: "#7a8a98" }}>
                  4 Apr 2024 - 4:48pm
                </p>
              </div>
              <div className="npr3bb">
                <p>Requester</p>
                <p style={{ fontSize: "14px", color: "#7a8a98" }}>
                  Firstname Lastname
                </p>
              </div>
              <div className="npr3bb">
                <p>Department</p>
                <p style={{ fontSize: "14px", color: "#7a8a98" }}>Sales</p>
              </div>
            </div>
            <div className="npr3c">
              <div className="npr3ca">
                <label>Purpose</label>
                <input
                  type="text"
                  name="purpose"
                  placeholder="Enter a purpose"
                  className="npr3cb"
                />
              </div>
              <div className="npr3ca">
                <label>Suggested Vendor</label>
                <input
                  type="text"
                  name="vendor"
                  placeholder="IT Hardware Sales"
                  className="npr3cb"
                />
              </div>
              <button
                type="button"
                className="npr3but"
                onClick={addRow}
                style={{ marginTop: "1rem" }}
              >
                Add Row
              </button>
            </div>
            <div
              className="npr3d"
              // style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Product Name</StyledTableCell>
                      <StyledTableCell>Description</StyledTableCell>
                      <StyledTableCell align="right">Qty</StyledTableCell>
                      <StyledTableCell align="right">
                        Estimated Unit Price
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Total Price
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentRows.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          <input
                            type="text"
                            placeholder="Enter a product name"
                            name="productName"
                            value={row.productName}
                            onChange={(e) =>
                              handleInputChange(
                                index + page * rowsPerPage,
                                "productName",
                                e.target.value
                              )
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <input
                            type="text"
                            placeholder="Enter a description"
                            name="description"
                            value={row.description}
                            onChange={(e) =>
                              handleInputChange(
                                index + page * rowsPerPage,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <input
                            type="number"
                            placeholder="0"
                            name="qty"
                            value={row.qty}
                            onChange={(e) =>
                              handleInputChange(
                                index + page * rowsPerPage,
                                "qty",
                                e.target.value
                              )
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <input
                            type="number"
                            placeholder="000,000"
                            name="unitPrice"
                            value={row.unitPrice}
                            onChange={(e) =>
                              handleInputChange(
                                index + page * rowsPerPage,
                                "unitPrice",
                                e.target.value
                              )
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <input
                            type="number"
                            placeholder="000,000"
                            name="totalPrice"
                            value={row.totalPrice}
                            readOnly
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="npr3e">
              <button type="button" className="npr3btn" onClick={handleSave}>
                Save
              </button>
              <button
                type="button"
                className="npr3btn"
                onClick={handleSaveAndSubmit}
              >
                Save & Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
