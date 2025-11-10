"use client";
import { DashboardContent } from "@/layouts/dashboard";
import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppWelcome from "../app-welcome";
import { SeoIllustration } from "@/assets/illustrations";
import { _ecommerceNewProducts } from "@/_mock/_overview";

const HomeView = () => {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <AppWelcome
            title={`Welcome back 👋`}
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            img={<SeoIllustration />}
            action={
              <Button variant="contained" color="primary">
                Go Now
              </Button>
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          {/* <EcommerceNewProducts list={_ecommerceNewProducts} /> */}
        </Grid>
      </Grid>
    </DashboardContent>
  );
};

export default HomeView;
