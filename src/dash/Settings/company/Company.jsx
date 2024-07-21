import React, { useState, useEffect } from "react";
import "./company.css";
import SearchIcon from "../../../../image/search.svg";
import { FaCaretLeft, FaCaretRight, FaBars } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import NewCompany from "./NewCompanyForm";

export default function Company() {
  const [Companys, setCompanys] = useState([]);
  const [filteredCompanys, setFilteredCompanys] = useState(Companys);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewCompany, setShowNewCompany] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const storedCompanys = JSON.parse(localStorage.getItem("Companys")) || [];
    setCompanys(storedCompanys);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, Companys]);

  const handleSearch = () => {
    if (searchQuery === "") {
      setFilteredCompanys(Companys);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = Companys.filter(
        (item) =>
          item.name.toLowerCase().includes(lowercasedQuery) ||
          item.mail.toLowerCase().includes(lowercasedQuery) ||
          item.number.toLowerCase().includes(lowercasedQuery) ||
          item.role.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredCompanys(filtered);
    }
  };

  const handleNewCompany = () => {
    setShowNewCompany(true);
  };

  const handleCloseNewCompany = () => {
    setShowNewCompany(false);
  };

  const handleSaveAndSubmit = (NewCompany) => {
    const updatedCompanys = [...Companys, NewCompany];
    setCompanys(updatedCompanys);
    localStorage.setItem("Companys", JSON.stringify(updatedCompanys));
  }

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="Company-page" id="Company">
      {showNewCompany ? (
        <div className="overlay">
          <NewCompany
            onClose={handleCloseNewCompany}
            onSaveAndSubmit={handleSaveAndSubmit}
          />
        </div>
      ) : (
        <div className="Company1">
          <div className="Company2">
            <div className="Company3">
              <div className="Company3a">
                <button className="Company3abtn" onClick={handleNewCompany}>
                  New Company
                </button>
                <div className="Companysash">
                  <label
                    htmlFor="searchInput"
                    className="Companys1"
                    onClick={handleSearch}
                  >
                    <img src={SearchIcon} alt="Search" className="Companys2" />
                    <input
                      id="searchInput"
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="Companys3"
                    />
                  </label>
                </div>
              </div>
              <div className="Company3b">
                <p className="Company3bpage">
                  1-2 of {filteredCompanys.length}
                </p>
                <div className="Company3bnav">
                  <FaCaretLeft className="lr" />
                  <div className="stroke"></div>
                  <FaCaretRight className="lr" />
                </div>
                <div className="Company3bview">
                  <IoGrid
                    className={`grid ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => toggleViewMode("grid")}
                  />
                  <div className="stroke"></div>
                  <FaBars
                    className={`grid ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => toggleViewMode("list")}
                  />
                </div>
              </div>
            </div>

            <div className="Company4">
              {filteredCompanys.map((Company, index) => (
                <div className="Company4gv" key={index}>
                  <div className="Companymage">
                    <img
                      src={Company.image || "default-image-url"}
                      alt={Company.name}
                      className="cirmage"
                    />
                  </div>
                  <p className="Companyname">{Company.name}</p>
                  <p className="Companyole">{Company.role}</p>
                  <p className="Companymail">{Company.mail}</p>
                  <p className="Companynum">{Company.number}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
