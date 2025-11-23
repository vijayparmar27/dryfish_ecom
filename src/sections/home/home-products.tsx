import React, { useState, useCallback } from "react";
import { alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Grid from "@mui/material/Grid";

import { Iconify } from "@/components/iconify";
import { ProductItem } from "@/sections/products/product-item";
import type { ProductItemProps } from "@/sections/products/product-item";

// ----------------------------------------------------------------------

type Props = {
  products: (ProductItemProps & { category: string })[];
};

export function HomeProducts({ products }: Props) {
  const [currentTab, setCurrentTab] = useState("all");

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setCurrentTab(newValue);
    },
    []
  );

  const TABS = [
    { value: "all", label: "All", icon: "solar:home-2-bold-duotone" },
    { value: "shose", label: "Shoes", icon: "solar:sneakers-bold-duotone" },
    { value: "apparel", label: "Apparel", icon: "solar:t-shirt-bold-duotone" },
    {
      value: "accessories",
      label: "Accessories",
      icon: "solar:glasses-bold-duotone",
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (currentTab === "all") {
      return true;
    }
    return product.category === currentTab;
  });

  return (
    <Box sx={{ my: 5 }}>
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={(theme) => ({
          mb: 5,
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .MuiTabs-flexContainer": {
            gap: 2,
            justifyContent: "flex-start",
            [theme.breakpoints.up("md")]: {
              justifyContent: "center",
            },
          },
        })}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            icon={<Iconify icon={tab.icon} width={24} />}
            label={tab.label}
            iconPosition="start"
            sx={{
              borderRadius: 1,
              px: 3,
              py: 1,
              minHeight: 48,
              fontWeight: "fontWeightSemiBold",
              color: "text.secondary",
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
              "&.Mui-selected": {
                color: "common.white",
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              },
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.16),
              },
            }}
          />
        ))}
      </Tabs>

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
