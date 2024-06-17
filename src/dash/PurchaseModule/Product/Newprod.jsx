import React, { useState, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import autosave from "../../../image/autosave.svg";
import './Newprod.css'

export default function Newprod({ onClose, onSaveAndSubmit }) {
  const generateNewID = () => {
    const lastID = localStorage.getItem("lastGeneratedID");
    let newID = "PR00001";

    if (lastID) {
      const idNumber = parseInt(lastID.slice(2), 10) + 1;
      newID = "PR" + idNumber.toString().padStart(5, "0");
    }

    localStorage.setItem("lastGeneratedID", newID);
    return newID;
  };

  const [formState, setFormState] = useState({
    id: generateNewID(),
    name: "",
    unt: "",
    type: "",
    category: "",
    company: "", 
    sp: "",
    cp: "",
  });

  const [showForm] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFormState((prevState) => ({
        ...prevState,
        date: new Date(),
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');

    setFormState((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    return `₦${value}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithFormattedPrices = {
      ...formState,
      cp: formatCurrency(formState.cp),
      sp: formatCurrency(formState.sp),
      date: formState.date.toString(), // Convert date to string
    };

    onSaveAndSubmit(formDataWithFormattedPrices);
    onClose();
  };

  return (
    <div id="newprod" className={`newp ${showForm ? "fade-in" : "fade-out"}`}>
      <div className="newp1">
        <div className="newp2">
          <div className="newp2a">
            <p className="newphed">New Product</p>
            <div className="newpauto">
              <p>Autosaved</p>
              <img src={autosave} alt="Autosaved" />
            </div>
          </div>
          <div className="newp2b">
            <div className="newpbnav">
              <FaCaretLeft className="nr" />
              <div className="sep"></div>
              <FaCaretRight className="nr" />
            </div>
          </div>
        </div>
        <div className="newp3">
          <form className="newpform" onSubmit={handleSubmit}>
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
              <div className="newp3ba">
                <label>Product Name</label>
                <input
                  type="text"
                  name="product name"
                  placeholder="Enter the product name"
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
                <label>Unit of Measure</label>
                <input
                  type="text"
                  name="unit of measure"
                  placeholder="QTY"
                  className="newp3cb"
                  value={formState.unt}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      unt: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="newp3ba">
                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  placeholder="Goods"
                  className="newp3cb"
                  value={formState.type}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="newp3c">
              <div className="newp3ca">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter the category"
                  className="newp3cb"
                  value={formState.category}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="newp3ca">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company 1"
                  className="newp3cb"
                  value={formState.company}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      company: e.target.value,
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
                  value={formatCurrency(formState.cp)}
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
                  value={formatCurrency(formState.sp)}
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
          </form>
        </div>
      </div>
    </div>
  );
}
