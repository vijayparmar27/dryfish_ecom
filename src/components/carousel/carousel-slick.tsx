import Slider, { Settings } from "react-slick";

import Box, { BoxProps } from "@mui/material/Box";
import { forwardRef } from "react";

// ----------------------------------------------------------------------

export interface CarouselProps extends BoxProps {
  children: React.ReactNode;
  settings?: Settings;
}

const Carousel = forwardRef<Slider, CarouselProps & Settings>(
  ({ children, sx, ...other }, ref) => {
    return (
      <Box sx={{ overflow: "hidden", ...sx }}>
        <Slider ref={ref} {...other}>
          {children}
        </Slider>
      </Box>
    );
  }
);

Carousel.displayName = "Carousel";

export default Carousel;
