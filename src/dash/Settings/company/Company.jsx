import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import "./company.css";
import NewCompanyForm from "./NewCompanyForm";
import AddIcon from "@mui/icons-material/Add";

const Company = () => {
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
    <div className="company-page" id="company">
      <div className="sub-page">
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
    </div>
  );
};

export default Company;
