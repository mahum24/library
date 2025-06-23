import React from "react";
import { Box, Typography } from "@mui/material";

const TextOnlySection = ({ props, styles }) => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: styles.background }}>
      <Typography variant="h4" sx={{ color: styles.titleColor, mb: 2 }}>
        {props.title}
      </Typography>
      <Typography variant="body1" sx={{ color: styles.subtitleColor }}>
        {props.text}
      </Typography>
    </Box>
  );
};

export default TextOnlySection;