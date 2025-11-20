
import React, { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';

import { ProductItem } from '@/sections/products/product-item';
import type { ProductItemProps } from '@/sections/products/product-item';

// ----------------------------------------------------------------------

type Props = {
  products: (ProductItemProps & { category: string })[];
};

export function HomeProducts({ products }: Props) {
  const [currentTab, setCurrentTab] = useState('all');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const TABS = [
    { value: 'all', label: 'All' },
    { value: 'shose', label: 'Shoes' },
    { value: 'apparel', label: 'Apparel' },
    { value: 'accessories', label: 'Accessories' },
  ];

  const filteredProducts = products.filter((product) => {
    if (currentTab === 'all') {
      return true;
    }
    return product.category === currentTab;
  });

  return (
    <Box sx={{ my: 5 }}>
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        sx={{
          mb: 3,
          '& .MuiTabs-indicator': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
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
