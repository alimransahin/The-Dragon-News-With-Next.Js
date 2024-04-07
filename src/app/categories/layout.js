import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Grid } from "@mui/material";
import React from "react";

const LayoutCategories = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CategoryList />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default LayoutCategories;
