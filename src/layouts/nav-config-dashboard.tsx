import { Label } from "@/components/label";
import { SvgColor } from "@/components/svg-color";
import { getAssetPath } from "@/utils/get-asset-path";

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={getAssetPath(`/assets/icons/navbar/${name}.svg`)} />
);

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

export const navData = [
  {
    title: "Home",
    path: "/",
    icon: icon("ic-home"),
  },
  {
    title: "Product",
    path: "/products",
    icon: icon("ic-cart"),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: "Bulk Order Request",
    path: "/contact",
    icon: icon("checklist"),
  },
  {
    title: "Blog",
    path: "/blogs",
    icon: icon("ic-blog"),
  },
  {
    title: "About us",
    path: "/about",
    icon: icon("id-card"),
  },
];
