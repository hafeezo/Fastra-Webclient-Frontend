import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./NewCompanyForm.css";

const NewCompanyForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    // Add other form fields here
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="md" className="new-company-form">
      <Paper elevation={3} className="form-paper">
        <div className="form-header">
          <IconButton onClick={onCancel}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">New Company</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <Typography variant="subtitle1" className="section-title">
            Basic Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} className="avatar-upload">
              <Avatar className="company-avatar">
                {formData.companyName[0] || "C"}
              </Avatar>
              <Button
                variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Upload Logo
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Typography variant="subtitle1" className="section-title">
            Contact Information
          </Typography>
          {/* Add the contact information fields here */}

          <Typography variant="subtitle1" className="section-title">
            Company Registration Info
          </Typography>
          {/* Add the registration info fields here */}

          <Typography variant="subtitle1" className="section-title">
            Other Information
          </Typography>
          {/* Add the other information fields here */}

          <div className="form-actions">
            <Button variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default NewCompanyForm;
