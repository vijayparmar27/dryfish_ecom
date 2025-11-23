"use client";

import { useEffect, useCallback, useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// redux
import { useDispatch } from "@/redux/store";
import { getProduct } from "@/redux/slices/product";
// routes
import { paths } from "@/routes/paths";
import { useParams } from "@/routes/hooks";
import { RouterLink } from "@/routes/components";
// components
import { Iconify } from "@/components/iconify";
import EmptyContent from "@/components/empty-content";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
//
import { CartIcon } from "../_common";
import { useProduct } from "../hooks";
import ProductDetailsReview from "../product-details-review";
import { ProductDetailsSkeleton } from "../product-skeleton";
import ProductDetailsSummary from "../product-details-summary";
import ProductDetailsCarousel from "../product-details-carousel";
import ProductDetailsDescription from "../product-details-description";

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: "100% Original",
    description: "Chocolate bar candy canes ice cream toffee cookie halvah.",
    icon: "solar:verified-check-bold",
  },
  {
    title: "10 Day Replacement",
    description: "Marshmallow biscuit donut dragée fruitcake wafer.",
    icon: "solar:clock-circle-bold",
  },
  {
    title: "Year Warranty",
    description: "Cotton candy gingerbread cake I love sugar sweet.",
    icon: "solar:shield-check-bold",
  },
];

const product = {
  id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
  gender: "Kids",
  publish: "draft",
  category: "Accessories",
  available: 0,
  priceSale: 83.74,
  taxes: 10,
  quantity: 80,
  sizes: [
    "6",
    "7",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "13",
  ],
  inventoryType: "out of stock",
  images: [
    "/dryfish_ecom/assets/images/m_product/product_1.jpg",
    "/dryfish_ecom/assets/images/m_product/product_2.jpg",
    "/dryfish_ecom/assets/images/m_product/product_3.jpg",
    "/dryfish_ecom/assets/images/m_product/product_4.jpg",
    "/dryfish_ecom/assets/images/m_product/product_5.jpg",
    "/dryfish_ecom/assets/images/m_product/product_6.jpg",
    "/dryfish_ecom/assets/images/m_product/product_7.jpg",
    "/dryfish_ecom/assets/images/m_product/product_8.jpg",
  ],
  ratings: [
    {
      name: "1 Star",
      starCount: 9911,
      reviewCount: 1947,
    },
    {
      name: "2 Star",
      starCount: 1947,
      reviewCount: 9124,
    },
    {
      name: "3 Star",
      starCount: 9124,
      reviewCount: 6984,
    },
    {
      name: "4 Star",
      starCount: 6984,
      reviewCount: 8488,
    },
    {
      name: "5 Star",
      starCount: 8488,
      reviewCount: 2034,
    },
  ],
  reviews: [
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      name: "Jayvion Simon",
      postedAt: "2025-11-23T04:31:48.701Z",
      comment:
        "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
      isPurchased: true,
      rating: 4.2,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-1.jpg",
      helpful: 9911,
      attachments: [],
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      name: "Lucian Obrien",
      postedAt: "2025-11-22T03:31:48.702Z",
      comment:
        "She eagerly opened the gift, her eyes sparkling with excitement.",
      isPurchased: true,
      rating: 3.7,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-2.jpg",
      helpful: 1947,
      attachments: ["/dryfish_ecom/assets/images/m_product/product_1.jpg"],
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      name: "Deja Brady",
      postedAt: "2025-11-21T02:31:48.702Z",
      comment:
        "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
      isPurchased: true,
      rating: 4.5,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-3.jpg",
      helpful: 9124,
      attachments: [],
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
      name: "Harrison Stein",
      postedAt: "2025-11-20T01:31:48.702Z",
      comment:
        "The aroma of freshly brewed coffee filled the air, awakening my senses.",
      isPurchased: false,
      rating: 3.5,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-4.jpg",
      helpful: 6984,
      attachments: [
        "/dryfish_ecom/assets/images/m_product/product_3.jpg",
        "/dryfish_ecom/assets/images/m_product/product_4.jpg",
      ],
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
      name: "Reece Chung",
      postedAt: "2025-11-19T00:31:48.702Z",
      comment:
        "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
      isPurchased: false,
      rating: 0.5,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-5.jpg",
      helpful: 8488,
      attachments: [],
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
      name: "Lainey Davidson",
      postedAt: "2025-11-17T23:31:48.702Z",
      comment:
        "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
      isPurchased: true,
      rating: 3,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-6.jpg",
      helpful: 2034,
      attachments: [
        "/dryfish_ecom/assets/images/m_product/product_6.jpg",
        "/dryfish_ecom/assets/images/m_product/product_7.jpg",
        "/dryfish_ecom/assets/images/m_product/product_8.jpg",
      ],
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
      name: "Cristopher Cardenas",
      postedAt: "2025-11-16T22:31:48.702Z",
      comment:
        "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",
      isPurchased: false,
      rating: 2.5,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-7.jpg",
      helpful: 3364,
      attachments: [],
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
      name: "Melanie Noble",
      postedAt: "2025-11-15T21:31:48.702Z",
      comment:
        "The waves crashed against the shore, creating a soothing symphony of sound.",
      isPurchased: false,
      rating: 2.8,
      avatarUrl: "/dryfish_ecom/assets/images/avatar/avatar-8.jpg",
      helpful: 8401,
      attachments: [],
    },
  ],
  tags: ["Technology", "Marketing", "Design", "Photography", "Art"],
  code: "38BEE270",
  description:
    "\n<h6>Specifications</h6>\n<br/>\n<ol>\n  <li>Category</li>\n  <li>Shoes</li>\n</ol>\n\n<br/>\n<ol>\n  <li>Manufacturer</li>\n  <li>Nike</li>\n</ol>\n\n<br/>\n<ol>\n  <li>Serial Number</li>\n  <li>358607726380311</li>\n</ol>\n\n<br/>\n<ol>\n  <li>Ships From</li>\n  <li>United States</li>\n</ol>\n\n<br/>\n<br/>\n\n<h6>Product Details</h6>\n<br/>\n<ul>\n  <li><p>The foam sockliner feels soft and comfortable</p></li>\n  <li><p>Pull tab</p></li>\n  <li><p>Not intended for use as Personal Protective Equipment</p></li>\n  <li><p>Colour Shown: White/Black/Oxygen Purple/Action Grape</p></li>\n  <li><p>Style: 921826-109</p></li>\n  <li><p>Country/Region of Origin: China</p></li>\n</ul>\n\n<br/>\n<br/>\n\n<h6>Benefits</h6>\n<br/>\n<ul>\n  <li>\n    <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort</p>\n    and durability.\n  </li>\n  <li>\n    <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio</p>\n    ning underfoot.\n  </li>\n  <li><p>The foam midsole feels springy and soft.</p></li>\n  <li><p>The rubber outsole adds traction and durability.</p></li>\n</ul>\n\n<br/>\n<br/>\n\n<h6>Delivery and Returns</h6>\n<br/>\n<p>Your order of $200 or more gets free standard delivery.</p>\n<br/>\n<ul>\n  <li><p>Standard delivered 4-5 Business Days</p></li>\n  <li><p>Express delivered 2-4 Business Days</p></li>\n</ul>\n<br/>\n<p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>\n\n",
  newLabel: {
    enabled: false,
    content: "NEW",
  },
  sku: "WW75K5210YW/SV",
  createdAt: "2025-11-23T04:31:48.703Z",
  saleLabel: {
    enabled: false,
    content: "SALE",
  },
  name: "Nike Air Force 1 NDESTRUKT",
  price: 83.74,
  coverUrl: "/dryfish_ecom/assets/images/m_product/product_1.jpg",
  totalRatings: 4.2,
  totalSold: 763,
  totalReviews: 1947,
  subDescription:
    "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
  colors: ["#00AB55", "#000000"],
};

// ----------------------------------------------------------------------

function useInitial() {
  const dispatch = useDispatch();

  const params = useParams();

  const { id } = params as { id: string };

  const getProductCallback = useCallback(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    getProductCallback();
  }, [getProductCallback]);

  return null;
}

export default function ProductShopDetailsView() {
  useInitial();

  const { checkout, onAddCart, onGotoStep, productStatus } = useProduct();

  const [currentTab, setCurrentTab] = useState("description");

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setCurrentTab(newValue);
    },
    []
  );

  const renderSkeleton = <ProductDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${productStatus.error?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.product.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{ py: 10 }}
    />
  );

  const renderProduct = product && (
    <>
      <CustomBreadcrumbs
        links={[
          { name: "Home", href: "/" },
          {
            name: "Shop",
            href: paths.product.root,
          },
          { name: product?.name },
        ]}
        sx={{ mb: 5 }}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
          <ProductDetailsCarousel product={product} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <ProductDetailsSummary
            product={product}
            cart={checkout.cart}
            onAddCart={onAddCart}
            onGotoStep={onGotoStep}
          />
        </Grid>
      </Grid>

      <Box
        gap={5}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        sx={{ my: 10 }}
      >
        {SUMMARY.map((item) => (
          <Box key={item.title} sx={{ textAlign: "center", px: 5 }}>
            <Iconify
              icon={item.icon}
              width={32}
              sx={{ color: "primary.main" }}
            />

            <Typography variant="subtitle1" sx={{ mb: 1, mt: 2 }}>
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Card>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            px: 3,
            boxShadow: (theme) =>
              `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {[
            {
              value: "description",
              label: "Description",
            },
            {
              value: "reviews",
              label: `Reviews (${product.reviews.length})`,
            },
          ].map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {currentTab === "description" && (
          <ProductDetailsDescription description={product?.description} />
        )}

        {currentTab === "reviews" && (
          <ProductDetailsReview
            ratings={product.ratings}
            reviews={product.reviews}
            totalRatings={product.totalRatings}
            totalReviews={product.totalReviews}
          />
        )}
      </Card>
    </>
  );

  return (
    <Container
      maxWidth={"lg"} // TODO: Check this
      sx={{
        mt: 5,
        mb: 15,
      }}
    >
      <CartIcon totalItems={checkout.totalItems} />

      {productStatus.loading ? (
        renderSkeleton
      ) : (
        <>{productStatus.error ? renderError : renderProduct}</>
      )}
    </Container>
  );
}
