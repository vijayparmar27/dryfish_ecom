// utils
import { paramCase } from "@/utils/change-case";
import { _id, _postTitles } from "@/_mock/assets";

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: "/auth",
  AUTH_DEMO: "/auth-demo",
  DASHBOARD: "/dashboard",
};

// ----------------------------------------------------------------------

export const paths = {
  product: {
    root: "/products",
    checkout: "/product/checkout",
    details: (id: string) => `/products/${id}`,
  },
  post: {
    root: `/blogs`,
    details: (title: string) => `/blogs/${paramCase(title)}`,
    demo: {
      details: `/blogs/${paramCase(MOCK_TITLE)}`,
    },
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    post: {
      root: `${ROOTS.DASHBOARD}/blogs`,
      new: `${ROOTS.DASHBOARD}/blogs/new`,
      details: (title: string) =>
        `${ROOTS.DASHBOARD}/blogs/${paramCase(title)}`,
      edit: (title: string) =>
        `${ROOTS.DASHBOARD}/blogs/${paramCase(title)}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/blogs/${paramCase(MOCK_TITLE)}`,
        edit: `${ROOTS.DASHBOARD}/blogs/${paramCase(MOCK_TITLE)}/edit`,
      },
    },
  },
};
