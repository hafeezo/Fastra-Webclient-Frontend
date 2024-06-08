import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import autosave from "../../../image/autosave.svg";
import "./Rform.css";

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

export default function Rform({
  onClose,
  onSaveAndSubmit,
  initialData,
  vendors,
  categories
}) {
  const defaultRows = initialData?.rows || [
    {
      productName: "",
      description: "",
      qty: "",
      unitPrice: "",
      totalPrice: "",
    },
  ];

  const [rows, setRows] = useState(defaultRows);

  const generateNewID = () => {
    const lastID = localStorage.getItem("lastGeneratedID");
    let newID = "RFQ00001";

    if (lastID && /^RFQ\d{5}$/.test(lastID)) {
      const idNumber = parseInt(lastID.slice(3), 10);
      if (!isNaN(idNumber)) {
        newID = "RFQ" + (idNumber + 1).toString().padStart(5, "0");
      }
    }

    localStorage.setItem("lastGeneratedID", newID);
    console.log(`Generated new ID: ${newID}`); // Debugging line
    return newID;
  };

  const [formState, setFormState] = useState({
    id: initialData?.id || generateNewID(),
    productName: initialData?.productName || "",
    amount: initialData?.amount || "",
    status: initialData?.status || "Awaiting Vendor Selection", // Assuming default status
    date: initialData?.date ? new Date(initialData.date) : new Date(), // Current date or initial date
    expiryDate: initialData?.expiryDate || "",
    vendor: initialData?.vendor || "",
    vendorCategory: initialData?.vendorCategory || "",
  });

  const [page, setPage] = useState(0);
  const rowsPerPage = 2;
  const [showForm] = useState(true);

  const [vendorDropdownVisible, setVendorDropdownVisible] = useState(false);
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFormState((prevState) => ({
        ...prevState,
        date: new Date(),
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (index, key, value) => {
    const newRows = [...rows];
    newRows[index][key] = value;
    if (key === "qty" || key === "unitPrice") {
      newRows[index]["totalPrice"] = (
        newRows[index]["qty"] * newRows[index]["unitPrice"]
      ).toFixed(2);
    }
    setRows(newRows);

    const totalAmount = newRows.reduce(
      (sum, row) => sum + parseFloat(row.totalPrice || 0),
      0
    );

    setFormState((prevState) => ({
      ...prevState,
      productName: key === "productName" ? value : prevState.productName,
      amount: totalAmount.toFixed(2),
    }));
  };

  const handleSave = () => {
    console.log("Input data saved:", rows);
    alert("Data saved successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithStringDate = {
      ...formState,
      date: formState.date.toString(), // Convert date to string
      rows,
    };

    onSaveAndSubmit(formDataWithStringDate);
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

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  };

  const calculateTotalAmount = () => {
    return rows
      .reduce((sum, row) => sum + parseFloat(row.totalPrice || 0), 0)
      .toFixed(2);
  };

  const handleVendorSelect = (vendor) => {
    setFormState((prevState) => ({
      ...prevState,
      vendor: vendor.vendorName,
    }));
    setVendorDropdownVisible(false);
  };

  const handleCategorySelect = (category) => {
    setFormState((prevState) => ({
      ...prevState,
      vendorCategory: category,
    }));
    setCategoryDropdownVisible(false);
  };

  return (
    <div id="newrfq" className={`rpr ${showForm ? "fade-in" : "fade-out"}`}>
      <div className="rpr1">
        <div className="rpr2">
          <div className="rpr2a">
            <p className="rprhed">New RFQs</p>
            <div className="rprauto">
              <p>Autosaved</p>
              <img src={autosave} alt="Autosaved" />
            </div>
          </div>
          <div className="rpr2b">
            <p className="rprbpg">
              {page + 1}-{pageCount} of {pageCount}
            </p>
            <div className="rprbnav">
              <FaCaretLeft className="nr" onClick={handlePreviousPage} />
              <div className="sep"></div>
              <FaCaretRight className="nr" onClick={handleNextPage} />
            </div>
          </div>
        </div>
        <div className="rpr3">
          <form className="rprform" onSubmit={handleSubmit}>
            <div className="rpr3a">
              <p style={{ fontSize: "20px" }}>Basic Information</p>
              <div className="rpr3e">
                <button type="button" className="rpr3but" onClick={onClose}>
                  Cancel
                </button>
                <button type="button" className="rpr3btn" onClick={handleSave}>
                  Save
                </button>
                <button type="submit" className="rpr3btn">
                  Send to vendor
                </button>
              </div>
            </div>

            <div className="rpr3b">
              <div className="rpr3ba">
                <p>ID</p>
                <p style={{ fontSize: "14px", color: "#7a8a98" }}>
                  {formState.id}
                </p>
              </div>
              <div className="rpr3bb">
                <p>Date Opened</p>
                <p style={{ fontSize: "14px", color: "#7a8a98" }}>
                  {`${formatDate(formState.date)} - ${formatTime(
                    formState.date
                  )}`}
                </p>
              </div>
            </div>
            <div className="rpr3c">
              <div className="rpr3ca">
                <label>Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  placeholder="DD MMM YYYY - HH MM - AM"
                  className="rpr3cb"
                  value={formState.expiryDate}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      expiryDate: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="rpr3ca">
                <label>Vendor</label>
                <div className="dropdown-container">
                  <input
                    type="text"
                    name="vendor"
                    placeholder="Select Vendor"
                    className="rpr3cb"
                    value={formState.vendor}
                    onClick={() => setVendorDropdownVisible(!vendorDropdownVisible)}
                    readOnly={false} // Make it editable
                  />
                  {vendorDropdownVisible && vendors && (
                    <div className="dropdown-menu">
                      {vendors.map((vendor, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          onClick={() => handleVendorSelect(vendor)}
                        >
                          {vendor.vendorName}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="rpr3ca">
                <label>Vendor Category</label>
                <div className="dropdown-container">
                  <input
                    type="text"
                    name="vendorCategory"
                    placeholder="Select Category"
                    className="rpr3cb"
                    value={formState.vendorCategory}
                    onClick={() => setCategoryDropdownVisible(!categoryDropdownVisible)}
                    readOnly={false} // Make it editable
                  />
                  {categoryDropdownVisible && categories && (
                    <div className="dropdown-menu">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="rpr3but"
                onClick={addRow}
                style={{ marginTop: "1rem" }}
              >
                Add Row
              </button>
            </div>
            <div className="rpr3d">
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                  border: "1px solid #e2e6e9",
                  marginTop: "1rem",
                }}
              >
                <Table
                  sx={{
                    minWidth: 700,
                    "&.MuiTable-root": {
                      border: "none",
                    },
                    "& .MuiTableCell-root": {
                      border: "none",
                    },
                    "& .MuiTableCell-head": {
                      border: "none",
                    },
                    "& .MuiTableCell-body": {
                      border: "none",
                    },
                  }}
                  aria-label="customized table"
                >
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
                      <StyledTableRow key={index + page * rowsPerPage}>
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
                            style={{ textAlign: "right" }}
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
                            placeholder="0.00"
                            name="unitPrice"
                            style={{ textAlign: "right" }}
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
                            placeholder="0.00"
                            name="totalPrice"
                            style={{ textAlign: "right" }}
                            value={row.totalPrice}
                            readOnly
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                    <StyledTableRow>
                      <StyledTableCell colSpan={4} align="right">
                        Total Amount
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {calculateTotalAmount()}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
