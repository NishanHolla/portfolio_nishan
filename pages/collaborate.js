import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Container,
  Paper,
  Grid,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "emailjs-com";
import Navbar from "./Navbar"; // Importing Navbar
import Footer from "./footer"; // Importing Footer
import WorkIcon from "@mui/icons-material/Work";
import background from "../public/background.jpg"; // Importing background image

const inquiryOptions = [
  { value: "project", label: "Project Inquiry" },
  { value: "collab", label: "Collaboration" },
  { value: "other", label: "Other" },
];

const StyledContainer = styled(Container)({
  backgroundColor: "#1f1f1f", // Dark background with a hint of grey
  color: "#FFFFFF", // White text
  minHeight: "100vh",
  paddingTop: "20px",
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2, // Ensure container is above background image
});

const BackgroundImage = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1, // Background image behind everything
  backgroundImage: `url(${background.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.7, // Slight opacity for a subtle background effect
});

const StyledPaper = styled(Paper)({
  padding: "32px",
  textAlign: "center",
  color: "#FFFFFF", // White text for the form
  backgroundColor: "#282828", // Slightly lighter dark background
  borderRadius: "16px", // More rounded corners
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)", // Deeper shadow for a modern look
  maxWidth: "600px", // Limiting the width of the form
  width: "100%",
  margin: "20px",
});

const StyledAvatar = styled(Avatar)({
  backgroundColor: "#e91e63", // Heart-like color
  margin: "auto",
});

const FormPage = () => {
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = () => {
    console.log("Form submitted"); // Debugging log
    setLoading(true); // Set loading state to true

    const templateParams = {
      email,
      inquiry,
      description,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (response) => {
          console.log("EmailJS SUCCESS!", response.status, response.text); // Debugging log
          setLoading(false); // Set loading state to false after success
        },
        (err) => {
          console.log("EmailJS FAILED...", err); // Debugging log
          setLoading(false); // Set loading state to false after failure
        }
      );

    // Reset form fields
    setEmail("");
    setInquiry("");
    setDescription("");
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {" "}
      {/* Ensure content is above background */}
      <BackgroundImage />
      <Navbar /> {/* Using Navbar component */}
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <StyledAvatar>
                <WorkIcon />
              </StyledAvatar>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h1" gutterBottom>
                Let&#39;s Collaborate ❤️
              </Typography>
              <Typography variant="body1" gutterBottom>
                Fill in the details, I&#39;ll get back to you soon!
              </Typography>
              <Typography variant="h6" gutterBottom>
                I&#39;m a passionate software developer from Bengaluru.
                Let&#39;s create something amazing together!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputLabelProps={{
                  style: { color: "#FFFFFF" }, // White label
                }}
                InputProps={{
                  style: { color: "#FFFFFF" }, // White input text
                }}
              />
              <TextField
                label="Inquiry Type"
                fullWidth
                select
                margin="normal"
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                required
                InputLabelProps={{
                  style: { color: "#FFFFFF" }, // White label
                }}
                InputProps={{
                  style: { color: "#FFFFFF" }, // White input text
                }}
              >
                {inquiryOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Additional Details"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                InputLabelProps={{
                  style: { color: "#FFFFFF" }, // White label
                }}
                InputProps={{
                  style: { color: "#FFFFFF" }, // White input text
                }}
              />
              <Button
                onClick={handleSubmit} // Run handleSubmit on button click
                variant="contained"
                color="secondary"
                fullWidth
                disabled={loading} // Disable button while loading
                sx={{
                  mt: 3,
                  backgroundColor: "#e91e63", // Heart-like color
                  "&:hover": {
                    backgroundColor: "#c2185b",
                  },
                }}
              >
                {loading ? <CircularProgress size={24} /> : "Send Proposal"}
              </Button>
            </Grid>
          </Grid>
        </StyledPaper>
      </StyledContainer>
      <Footer /> {/* Using Footer component */}
    </div>
  );
};

export default FormPage;
