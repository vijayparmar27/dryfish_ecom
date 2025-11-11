"use client";
import { DashboardContent } from "@/layouts/dashboard";
import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppWelcome from "../app-welcome";
import { SeoIllustration } from "@/assets/illustrations";
import { _ecommerceNewProducts } from "@/_mock/_overview";
import { Carousel } from "@/components/carousel/carousel";
import { carouselItems } from "@/_mock";

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
          {/* <div className="mx-auto max-w-6xl px-4 py-12"> */}
          <Carousel
            items={_ecommerceNewProducts.map((item) => ({
              id: item.id,
              title: item.name,
              image: item.coverUrl,
              description: "item.",
            }))}
            autoPlay
            autoPlayInterval={5000}
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
};

export default HomeView;
