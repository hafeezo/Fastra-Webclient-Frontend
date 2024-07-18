import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Select from "react-select";
import autosave from "../../../image/autosave.svg";
import "./newuser.css";

export default function NewUser({ onClose, onSaveAndSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    role: "",
    mail: "",
    number: "",
    image: null,
  });

  const [showForm] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormState((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAndSubmit = (formData) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(formData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      onSaveAndSubmit(formData);
    } catch (e) {
      if (e.name === "QuotaExceededError") {
        setError("Failed to save user. Storage limit exceeded.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveAndSubmit(formState);
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
            <div className="newuser3a">
              <p style={{ fontSize: "20px" }}>Basic Information</p>
              <div className="newuser3e">
                <button type="button" className="newuser3but" onClick={onClose}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="newuser3btn"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="newuser3b">
              <div className="newuser3ba">
                <label>Image</label>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageChange}
                  className="newuser3cb"
                  name="image"
                  required
                />
              </div>
              <div className="newuser3ba">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="FirstName LastName"
                  className="newuser3cb"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="newuser3ba">
                <label>Role</label>
                <Select
                  options={roleOptions}
                  name="role"
                  styles={customStyles}
                  value={roleOptions.find(
                    (option) => option.value === formState.role
                  )}
                  onChange={(selectedOption) =>
                    setFormState((prev) => ({
                      ...prev,
                      role: selectedOption ? selectedOption.value : "",
                    }))
                  }
                />
              </div>
            </div>

            <div className="newuser3a2">
              <p style={{ fontSize: "20px" }}>Contact Information</p>
            </div>
            <div className="newuser3d">
              <div className="newuser3da">
                <label>Email</label>
                <input
                  type="text"
                  name="mail"
                  placeholder="Enter your company email address"
                  className="newuser3cb"
                  value={formState.mail}
                  onChange={handleChange}
                />
              </div>
              <div className="newuser3da">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter your company phone number"
                  className="newuser3cb"
                  value={formState.number}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="newuser3a2">
              <p style={{ fontSize: "20px" }}>Companies</p>
            </div>
            <div className="newuser3f">
              <p>Company name</p>
              <button
                className="newuser3btn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                Add Company
              </button>
            </div>

            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
