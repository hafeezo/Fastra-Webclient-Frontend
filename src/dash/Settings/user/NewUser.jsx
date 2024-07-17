import React, { useState, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Select from "react-select";
import autosave from "../../../image/autosave.svg";
import "./newuser.css";

export default function NewUser({ onClose, onSaveAndSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    role: "",
    sp: "",
    cp: "",
    image: null, // New state for image
  });

  const [showForm] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");

    setFormState((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormState((prev) => ({
        ...prev,
        image: reader.result, // Set image to base64 encoded string
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const formatCurrency = (value) => {
    if (!value) return "";
    return `₦${value}`;
  };

  const handleSaveAndSubmit = (formData) => {
    try {
      const existingProducts =
        JSON.parse(localStorage.getItem("products")) || [];
      existingProducts.push(formData);
      localStorage.setItem("products", JSON.stringify(existingProducts));
      onSaveAndSubmit(formData);
    } catch (e) {
      if (e.name === "QuotaExceededError") {
        setError("Failed to save product. Storage limit exceeded.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithFormattedPrices = {
      ...formState,
      sp: formatCurrency(formState.sp),
      date: formState.date ? formState.date.toString() : new Date().toString(),
    };

    handleSaveAndSubmit(formDataWithFormattedPrices);
    onClose();
  };

  const roleOptions = [
    { value: "Admin", label: "Administrator" },
    { value: "Usr", label: "User" },
    { value: "Opr", label: "Operator" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "95%",
      marginTop: "0.1rem",
      cursor: "pointer",
      outline: "none",
      border: "2px solid #e2e6e9",
      borderRadius: "4px",
      padding: "5px",
      marginBottom: "1rem",
    }),
    menu: (provided) => ({
      ...provided,
      width: "95%",
    }),
    menuList: (provided) => ({
      ...provided,
      width: "95%",
    }),
    option: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
  };

  return (
    <div id="newuser" className={`newuser ${showForm ? "fade-in" : "fade-out"}`}>
      <div className="newuser1">
        <div className="newuser2">
          <div className="newuser2a">
            <p className="newuserhed">New User</p>
            <div className="newuserauto">
              <p>Autosaved</p>
              <img src={autosave} alt="Autosaved" />
            </div>
          </div>
          <div className="newuser2b">
            <div className="newuserbnav">
              <FaCaretLeft className="nr" />
              <div className="sep"></div>
              <FaCaretRight className="nr" />
            </div>
          </div>
        </div>
        <div className="raprclk">
          <p className="togclk">Basic Setting</p>
          <p className="togclk">Access Right</p>
        </div>

        <div className="newuser3">
          <form className="newuserform" onSubmit={handleSubmit}>
            <div className="newp3a">
              <p style={{ fontSize: "20px" }}>Basic Information</p>
              <button
                type="button"
                className="newp3but"
                onClick={onClose}
                style={{ marginTop: "1rem" }}
              >
                Cancel
              </button>
            </div>
            <div className="newp3b">
              <div className="newp3ca">
                <label>Image</label>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageChange}
                  className="newp3cb"
                  name="image"
                  required
                />
              </div>
              <div className="newp3ba">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="FirstName LastName"
                  className="newp3cb"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="newp3ba">
                <label>Role</label>
                <Select
                  options={roleOptions}
                  name="unt"
                  styles={customStyles}
                  value={roleOptions.find(
                    (option) => option.value === formState.role
                  )}
                  onChange={(selectedOption) =>
                    setFormState((prev) => ({
                      ...prev,
                      unt: selectedOption ? selectedOption.value : "",
                    }))
                  }
                />
              </div>
            </div>

            <div className="newp3a2">
              <p style={{ fontSize: "20px" }}>Pricing</p>
            </div>
            <div className="newp3d">
              <div className="newp3da">
                <label>Cost Price</label>
                <input
                  type="text"
                  name="cp"
                  placeholder="₦0000"
                  className="newp3cb no-spin"
                  value={formState.cp}
                  onChange={handleChange}
                />
              </div>
              <div className="newp3da">
                <label>Selling Price</label>
                <input
                  type="text"
                  name="sp"
                  placeholder="₦0000"
                  className="newp3cb no-spin"
                  value={formState.sp}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="newp3e">
              <button
                type="submit"
                className="newp3btn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                Create Product
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
