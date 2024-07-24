import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import autosave from "../../../image/autosave.svg";
import "./Receipt.css";

const Receipt = ({ formData, onClose }) => {
  // Initialize the page state
  const [page, setPage] = useState(0);

  // Default rows to an empty array if formData or formData.rows is undefined
  const rows = formData && formData.rows ? formData.rows : [];

  const formatDate = (date) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return new Date(date).toLocaleString("en-GB", options).replace(",", "");
  };
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const rowsPerPage = 2;

  // Calculate total pages
  const pageCount = Math.ceil(rows.length / rowsPerPage);

  // Ensure page index is within valid range
  const currentPage = Math.max(0, Math.min(page, pageCount - 1));

  // Handle page navigation
  const handleNextPage = () => {
    if ((currentPage + 1) * rowsPerPage < rows.length) {
      setPage(currentPage + 1);
    }
  };

    const handleNewPurchaseOrder = () => {
      setIsFormVisible(true);
    };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1);
    }
  };

  // Slice rows for the current page
  const currentRows = rows.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (
    <div className="receipt-container">
      <div className="receipt-container2">
        <div className="newpodr2" style={{ marginBottom: "15px" }}>
          <div className="newpod2a">
            <button className="r3abtn" onClick={handleNewPurchaseOrder}>
              New Purchase Order
            </button>
            <div className="rprauto">
              <p>Autosaved</p>
              <img src={autosave} alt="Autosaved" />
            </div>
          </div>
          <div className="newpod2b">
            <p className="rprbpg">
              {currentPage + 1}-{pageCount} of {pageCount}
            </p>
            <div className="rprbnav">
              <FaCaretLeft className="nr" onClick={handlePreviousPage} />
              <div className="sep"></div>
              <FaCaretRight className="nr" onClick={handleNextPage} />
            </div>
          </div>
        </div>
        <div className="receipt-header">
          <div className="receipt-actions">
            <button className="validate-button">Validate</button>
            <button>Print</button>
            <button onClick={onClose}>Cancel</button>
          </div>
          <div className="receipt-status">
            <button className="status-active">Ready</button>
            <button>Draft</button>
            <button>Done</button>
          </div>
        </div>

        <div className="receipt-info">
          <div className="receipt-left">
            <h3>WH/IN/00006</h3>
            <p>
              Receive From <span>Ready Mat</span>
            </p>
          </div>
          <div className="receipt-right">
            <div className="receipt-dates">
              <p>
                Scheduled Date{" "}
                <span>{formData ? formatDate(formData.date) : ""}</span>
              </p>
              <p>
                Deadline{" "}
                <span>{formData ? formatDate(formData.date) : ""}</span>
              </p>
              <p>
                Source Document <span>{formData ? formData.id : ""}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="receipt-tabs">
          <button className="tab-active">Operations</button>
          <button>Additional Info</button>
          <button>Note</button>
        </div>

        <table className="receipt-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>QTY</th>
              <th>Estimated Unit Price</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.productName}</td>
                  <td>{row.description}</td>
                  <td>{row.qty}</td>
                  <td>{row.unitPrice}</td>
                  <td>{row.totalPrice}</td>
                  <td>
                    <button className="edit-button">✎</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" align="center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total</td>
              <td>
                {rows
                  .reduce((sum, row) => sum + parseFloat(row.totalPrice), 0)
                  .toFixed(2)}
              </td>
              <td>
                <button className="edit-button">✎</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Receipt;
