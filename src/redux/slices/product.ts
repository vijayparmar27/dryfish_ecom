import sum from "lodash/sum";
import uniq from "lodash/uniq";
import uniqBy from "lodash/uniqBy";
import { createSlice, Dispatch } from "@reduxjs/toolkit";
// utils
import axios, { API_ENDPOINTS } from "@/utils/axios";
import { IProductState, ICheckoutCartItem } from "@/types/product";

// ----------------------------------------------------------------------

const product = {
  id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
  gender: "Kids",
  publish: "published",
  category: "Accessories",
  available: 10,
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
  inventoryType: "low stock",
  images: [
    "/dryfish_ecom/assets/images/product/product-1.webp",
    "/dryfish_ecom/assets/images/product/product-2.webp",
    "/dryfish_ecom/assets/images/product/product-3.webp",
    "/dryfish_ecom/assets/images/product/product-4.webp",
    "/dryfish_ecom/assets/images/product/product-5.webp",
    "/dryfish_ecom/assets/images/product/product-6.webp",
    "/dryfish_ecom/assets/images/product/product-7.webp",
    "/dryfish_ecom/assets/images/product/product-8.webp",
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

const initialState: IProductState = {
  products: [product],
  product: product,
  checkout: {
    activeStep: 0,
    cart: [],
    subTotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
    totalItems: 0,
  },
  productsStatus: {
    loading: false,
    empty: false,
    error: null,
  },
  productStatus: {
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // GET PRODUCTS
    getProductsStart(state) {
      state.productsStatus.loading = true;
      state.productsStatus.empty = false;
      state.productsStatus.error = null;
    },
    getProductsFailure(state, action) {
      state.productsStatus.loading = false;
      state.productsStatus.empty = false;
      state.productsStatus.error = action.payload;
    },
    getProductsSuccess(state, action) {
      const products = action.payload;

      state.products = products;

      state.productsStatus.loading = false;
      state.productsStatus.empty = !products.length;
      state.productsStatus.error = null;
    },

    // GET PRODUCT
    getProductStart(state) {
      state.productStatus.loading = true;
      state.productStatus.error = null;
    },
    getProductFailure(state, action) {
      state.productStatus.loading = false;
      state.productStatus.error = action.payload;
    },
    getProductSuccess(state, action) {
      const product = action.payload;

      state.product = product;

      state.productStatus.loading = false;
      state.productStatus.error = null;
    },

    // CHECKOUT
    getCart(state, action) {
      const cart: ICheckoutCartItem[] = action.payload;

      const totalItems = sum(cart.map((product) => product.quantity));

      const subTotal = sum(
        cart.map((product) => product.price * product.quantity)
      );

      state.checkout.cart = cart;
      state.checkout.discount = state.checkout.discount || 0;
      state.checkout.shipping = state.checkout.shipping || 0;
      state.checkout.billing = state.checkout.billing || null;
      state.checkout.subTotal = subTotal;
      state.checkout.total = subTotal - state.checkout.discount;
      state.checkout.totalItems = totalItems;
    },

    addToCart(state, action) {
      const newProduct = action.payload;

      const cartEmpty = !state.checkout.cart.length;

      if (cartEmpty) {
        state.checkout.cart = [...state.checkout.cart, newProduct];
      } else {
        state.checkout.cart = state.checkout.cart.map((product) => {
          const existProduct = product.id === newProduct.id;

          if (existProduct) {
            return {
              ...product,
              colors: uniq([...product.colors, ...newProduct.colors]),
              quantity: product.quantity + 1,
            };
          }

          return product;
        });
      }

      state.checkout.cart = uniqBy([...state.checkout.cart, newProduct], "id");
      state.checkout.totalItems = sum(
        state.checkout.cart.map((product) => product.quantity)
      );
    },

    deleteCart(state, action) {
      const updateCart = state.checkout.cart.filter(
        (product) => product.id !== action.payload
      );

      state.checkout.cart = updateCart;
    },

    resetCart(state) {
      state.checkout.cart = [];
      state.checkout.billing = null;
      state.checkout.activeStep = 0;
      state.checkout.total = 0;
      state.checkout.subTotal = 0;
      state.checkout.discount = 0;
      state.checkout.shipping = 0;
      state.checkout.totalItems = 0;
    },

    backStep(state) {
      state.checkout.activeStep -= 1;
    },

    nextStep(state) {
      state.checkout.activeStep += 1;
    },

    gotoStep(state, action) {
      state.checkout.activeStep = action.payload;
    },

    increaseQuantity(state, action) {
      const productId = action.payload;

      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      state.checkout.cart = updateCart;
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;

      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      state.checkout.cart = updateCart;
    },

    createBilling(state, action) {
      state.checkout.billing = action.payload;
    },

    applyDiscount(state, action) {
      const discount = action.payload;

      state.checkout.discount = discount;
      state.checkout.total = state.checkout.subTotal - discount;
    },

    applyShipping(state, action) {
      const shipping = action.payload;

      state.checkout.shipping = shipping;
      state.checkout.total =
        state.checkout.subTotal - state.checkout.discount + shipping;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getCart,
  addToCart,
  resetCart,
  gotoStep,
  backStep,
  nextStep,
  deleteCart,
  createBilling,
  applyShipping,
  applyDiscount,
  increaseQuantity,
  decreaseQuantity,
} = slice.actions;

// ----------------------------------------------------------------------

export function getProducts() {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.getProductsStart());
    try {
      const response = await axios.get(API_ENDPOINTS.product.list);
      dispatch(slice.actions.getProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(slice.actions.getProductsFailure(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getProduct(productId: string | number) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.getProductStart());
    try {
      // const response = await axios.get(API_ENDPOINTS.product.details, {
      //   params: {
      //     productId,
      //   },
      // });
      // const response = product;
      dispatch(slice.actions.getProductSuccess(product));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.getProductFailure(error));
    }
  };
}
