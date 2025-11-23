// sections

import ProductShopDetailsView from "@/sections/products/view/product-shop-details-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Product: Details",
};

// Generate static params for all products
export async function generateStaticParams() {
  // Generate IDs for all 24 products (indices 0-23)
  // This matches the _id function pattern: e99f09a7-dd88-49d5-b1c8-1daf80c2d7b{index}
  return Array.from({ length: 24 }, (_, index) => ({
    id: `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index}`,
  }));
}

export default function ProductShopDetailsPage() {
  return <ProductShopDetailsView />;
}
