import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroImage = ({ props, styles }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: styles.titleColor,
        py: 10,
        px: 4,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: styles.backgroundOverlay,
          p: 5,
          borderRadius: 2,
          display: "inline-block",
        }}
      >
        <Typography variant="h3" sx={{ color: styles.titleColor }}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: styles.subtitleColor, mt: 2 }}>
          {props.subtitle}
        </Typography>
        <Button
          sx={{
            mt: 4,
            backgroundColor: styles.buttonBg,
            color: styles.buttonColor,
            px: 4,
            py: 1,
          }}
        >
          {props.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default HeroImage;