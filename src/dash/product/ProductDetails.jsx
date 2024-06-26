import React, { useState } from "react";
import "./ProductDetails.css";

export default function ProductDetails({ product, onClose, onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [formState, setFormState] = useState({ ...product });

  if (!product) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formState);
    setEditMode(false);
  };

  return (
    <div id="prodetails" className="prodet">
      <form className="prodet1">
        <div className="prodet2">
          <p style={{ fontSize: "20px" }}>Basic Information</p>
          <div className="prodet2a">
            <button type="button" className="prodet2but" onClick={onClose}>
              Cancel
            </button>
            {editMode ? (
              <button type="button" className="prodet2btn" onClick={handleSave}>
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
        </div>
        <div className="prodet3">
          <div className="prodet3a">
            <label>Product Name</label>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="editable-input"
              />
            ) : (
              <p className="prodet3b">{product.name}</p>
            )}
          </div>
          <div className="prodet3a">
            <label>Unit of Measure</label>
            {editMode ? (
              <input
                type="text"
                name="unit of measure"
                value={formState.unt}
                onChange={handleChange}
                className="editable-input"
              />
            ) : (
              <p className="prodet3b">{product.unt}</p>
            )}
          </div>
          <div className="prodet3a">
            <label>Type</label>
            {editMode ? (
              <input
                type="text"
                name="type"
                value={formState.type}
                onChange={handleChange}
                className="editable-input"
              />
            ) : (
              <p className="prodet3b">{product.type}</p>
            )}
          </div>
          <div className="prodet3a">
            <label>Category</label>
            {editMode ? (
              <input
                type="text"
                name="category"
                value={formState.category}
                onChange={handleChange}
                className="editable-input"
              />
            ) : (
              <p className="prodet3b">{product.category}</p>
            )}
          </div>
          <div className="prodet3a">
            <label>Company</label>
            {editMode ? (
              <input
                type="text"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="editable-input"
              />
            ) : (
              <p className="prodet3b">{product.company}</p>
            )}
          </div>
        </div>
        <div>
          <div className="prodet1a2">
            <p style={{ fontSize: "20px" }}>Pricing</p>
          </div>
          <div className="prodet4">
            <div className="prodet4a">
              <label>Selling Price</label>
              {editMode ? (
                <input
                  type="text"
                  name="sp"
                  value={formState.sp}
                  onChange={handleChange}
                  className="editable-input"
                />
              ) : (
                <p className="prodet4b">{product.sp}</p>
              )}
            </div>
            <div className="prodet4a">
              <label>Cost Price</label>
              {editMode ? (
                <input
                  type="text"
                  name="cp"
                  value={formState.cp}
                  onChange={handleChange}
                  className="editable-input"
                />
              ) : (
                <p className="prodet4b">{product.cp}</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
