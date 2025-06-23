import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const StatsSection = ({ props, styles }) => {
  return (
    <Box sx={{ py: 10, px: 4, backgroundColor: styles.background }}>
      <Grid container spacing={4}>
        {props.stats.map((stat, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Typography variant="h5" sx={{ color: styles.titleColor }}>
              {stat.number}
            </Typography>
            <Typography variant="body2" sx={{ color: styles.subtitleColor }}>
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;