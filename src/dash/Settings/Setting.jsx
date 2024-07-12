import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import "./Setting.css";
import NewCompanyForm from "./NewSettingForm";

const Settings = () => {
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  return (
    <div className="settings-page">
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" className="title">
            Settings
          </Typography>
          <div className="nav-items">
            <Button color="inherit">Applications</Button>
            <Button color="inherit">Company</Button>
            <Button color="inherit">Users</Button>
          </div>
          <Avatar className="user-avatar">A</Avatar>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="main-content">
        {showForm ? (
          <NewCompanyForm
            onSave={handleSaveCompany}
            onCancel={handleCancelForm}
          />
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
                      <Typography variant="h6">
                        {company.companyName}
                      </Typography>
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
