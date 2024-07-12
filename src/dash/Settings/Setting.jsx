import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import admin from "../../image/admin.svg";
import Sidebar from "../../components/Sidebar";
import "./Setting.css";
import NewCompanyForm from "./NewSettingForm";
import AddIcon from "@mui/icons-material/Add";

const Settings = () => {
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState(0);

  const handleAddCompany = () => {
    setShowForm(true);
  };

  const handleSaveCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="settings-page">
      <div className="sethead">
        <ul className="setwrap">
          <li className="sethom" onClick={toggleSidebar}>
            {sidebarOpen ? (
              <FaTimes className="setnav" />
            ) : (
              <FaBars className="setnav" />
            )}
            <p style={{fontWeight: '700'}}>Settings</p>
          </li>
          <li className="setlst">
            <div className="setlist">
              <NavLink
                exact
                to="/app"
                className="setst"
                activeClassName="active"
              >
               Applications
              </NavLink>
              <NavLink
                exact
                to="/company"
                className="setst"
                activeClassName="active"
              >
                Company
              </NavLink>
              <NavLink
                exact
                to="/user"
                className="setst"
                activeClassName="active"
              >
                Users
              </NavLink>
            </div>
          </li>
          <li className="setalert">
          <div className="setbell-icon-container">
            <FaBell className="setbell-icon" />
            {notifications > 0 && (
              <span className="setnotification-count">{notifications}</span>
            )}
          </div>
        </li>
        <li className="setadmin">
          <img src={admin} alt="admin" className="setadminimg" />
          <div className="setadminname">
            <p className="setad">Administrator</p>
          </div>
        </li>
          {/* <Avatar className="user-avatar">A</Avatar> */}
        </ul>
      </div>

      {sidebarOpen && <Sidebar />}

      <Container maxWidth="lg" className="main-content">
        {showForm ? (
          <NewCompanyForm onSave={handleSaveCompany} onCancel={handleCancelForm} />
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddCompany}
            >
              New Company
            </Button>

            <Grid container spacing={3} className="company-grid">
              {companies.map((company, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{company.companyName}</Typography>
                      <Typography variant="setting2" color="textSecondary">
                        {company.email}
                      </Typography>
                      <Typography variant="setting2" color="textSecondary">
                        {company.phoneNumber}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
};

export default Settings;
