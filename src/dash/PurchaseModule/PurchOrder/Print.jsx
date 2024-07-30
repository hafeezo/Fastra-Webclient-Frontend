import React, { useState } from "react";
import "./print.css";
import { FaTimes } from "react-icons/fa";

const Print = (handleClosePrint) => {
  const [layout, setLayout] = useState("light");
  const [font, setFont] = useState("Product Sans");
  const [colors, setColors] = useState(["#000", "#333"]);
  const [background, setBackground] = useState("Blank");
  const [tagline, setTagline] = useState("");
  const [companyDetails, setCompanyDetails] = useState({});

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-component">
      <div className="print-top">
        <div className="top-title">
          <p style={{ fontSize: "24px", fontWeight: "700" }}>
            Configure your document layout
          </p>
          <FaTimes onClick={handleClosePrint} style={{ color: "#7A8A98" }} />
        </div>
      </div>

      <div className="page-config">
        <div className="config-set">
          <div className="layout-options">
            <p>Layout</p>
            <div className="option-select">
              <label
                style={{
                  fontWeight: "400",
                  color: "#7A8A98",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <input
                  type="radio"
                  value="light"
                  checked={layout === "light"}
                  onChange={() => setLayout("light")}
                />{" "}
                Light
              </label>
              <label
                style={{
                  fontWeight: "400",
                  color: "#7A8A98",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <input
                  type="radio"
                  value="boxed"
                  checked={layout === "boxed"}
                  onChange={() => setLayout("boxed")}
                />{" "}
                Boxed
              </label>
              <label
                style={{
                  fontWeight: "400",
                  color: "#7A8A98",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <input
                  type="radio"
                  value="bold"
                  checked={layout === "bold"}
                  onChange={() => setLayout("bold")}
                />{" "}
                Bold
              </label>
              <label
                style={{
                  fontWeight: "400",
                  color: "#7A8A98",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <input
                  type="radio"
                  value="striped"
                  checked={layout === "striped"}
                  onChange={() => setLayout("striped")}
                />{" "}
                Striped
              </label>
            </div>
          </div>
          <div className="font-options">
            <p>Font</p>
            <input
              type="text"
              value={font}
              onChange={(e) => setFont(e.target.value)}
              style={{border: 'none', outline: 'none'}}
            />
          </div>
        </div>
      </div>
      <button onClick={handlePrint}>Save</button>
    </div>
  );
};

export default Print;
