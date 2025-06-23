import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const NewsletterSignup = ({ props, styles }) => {
  return (
    <Box sx={{ py: 10, px: 4, backgroundColor: styles.background, textAlign: "center" }}>
      <Typography variant="h5" sx={{ color: styles.titleColor, mb: 2 }}>
        {props.title}
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Enter your email"
        sx={{ mr: 2, backgroundColor: "#fff" }}
      />
      <Button sx={{ backgroundColor: styles.buttonBg, color: styles.buttonColor }}>
        {props.buttonText}
      </Button>
    </Box>
  );
};

export default NewsletterSignup;
