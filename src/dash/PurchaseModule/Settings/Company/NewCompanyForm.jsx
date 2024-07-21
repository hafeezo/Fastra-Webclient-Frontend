import React, { useState } from "react";
import Select from "react-select";
import "./NewCompanyForm.css";

export default function NewCompanyForm({ onClose, onSaveAndSubmit }) {
  const [formState, setFormState] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    website: "",
    street: "",
    localGovernment: "",
    state: "",
    country: "",
    registrationNumber: "",
    taxId: "",
    currency: "",
    industry: "",
    language: "",
    size: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormState((prev) => ({
      ...prev,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveAndSubmit(formState);
    onClose();
  };

  const currencyOptions = [
    { value: "USD", label: "USD" },
    // Add more currency options as needed
  ];

  const industryOptions = [
    { value: "technology", label: "Technology" },
    // Add more industry options as needed
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    // Add more language options as needed
  ];

  const sizeOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      marginTop: "0.1rem",
      cursor: "pointer",
      outline: "none",
      border: "1px solid #e2e6e9",
      borderRadius: "4px",
      padding: "5px",
      marginBottom: "1rem",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
    }),
  };

  return (
    <div className="new-company-form">
      <div className="form-header">
        <h2>New Company</h2>
        <div className="form-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit} className="save-button">
            Save
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <section>
          <h3>Basic Information</h3>
          <div className="form-group">
            <label>Company name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formState.companyName}
              onChange={handleChange}
            />
          </div>
        </section>

        <section>
          <h3>Contact Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your company email address"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your company phone number"
                value={formState.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                type="url"
                name="website"
                placeholder="Enter your company website URL"
                value={formState.website}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Street</label>
              <input
                type="text"
                name="street"
                placeholder="Enter street number"
                value={formState.street}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Local Government</label>
              <input
                type="text"
                name="localGovernment"
                placeholder="Enter local government"
                value={formState.localGovernment}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                value={formState.state}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter country"
              value={formState.country}
              onChange={handleChange}
            />
          </div>
        </section>

        <section>
          <h3>Company Registration Info</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                placeholder="Enter your company registration number"
                value={formState.registrationNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Tax ID</label>
              <input
                type="text"
                name="taxId"
                placeholder="Enter your company Tax Identification Number"
                value={formState.taxId}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        <section>
          <h3>Other Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Currency</label>
              <Select
                options={currencyOptions}
                styles={customStyles}
                value={currencyOptions.find(
                  (option) => option.value === formState.currency
                )}
                onChange={(selectedOption) =>
                  handleSelectChange("currency", selectedOption)
                }
              />
            </div>
            <div className="form-group">
              <label>Industry</label>
              <Select
                options={industryOptions}
                styles={customStyles}
                value={industryOptions.find(
                  (option) => option.value === formState.industry
                )}
                onChange={(selectedOption) =>
                  handleSelectChange("industry", selectedOption)
                }
              />
            </div>
            <div className="form-group">
              <label>Language</label>
              <Select
                options={languageOptions}
                styles={customStyles}
                value={languageOptions.find(
                  (option) => option.value === formState.language
                )}
                onChange={(selectedOption) =>
                  handleSelectChange("language", selectedOption)
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label>Size</label>
            <Select
              options={sizeOptions}
              styles={customStyles}
              value={sizeOptions.find(
                (option) => option.value === formState.size
              )}
              onChange={(selectedOption) =>
                handleSelectChange("size", selectedOption)
              }
            />
          </div>
        </section>
      </form>
    </div>
  );
}
