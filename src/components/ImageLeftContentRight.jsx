import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const ImageLeftContentRight = ({ props, styles }) => {
  return (
    <Grid container spacing={4} sx={{ py: 8, px: 4, backgroundColor: styles.background }}>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={props.imageUrl}
          alt="Section Image"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{ color: styles.titleColor, mb: 2 }}>
          {props.title}
        </Typography>
        <Typography variant="body1" sx={{ color: styles.subtitleColor, mb: 2 }}>
          {props.text}
        </Typography>
        <Button sx={{ backgroundColor: styles.buttonBg, color: styles.buttonColor }}>
          {props.buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ImageLeftContentRight;