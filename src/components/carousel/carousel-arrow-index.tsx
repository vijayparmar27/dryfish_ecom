import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  position: "absolute",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 9,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[900], 0.48),
  color: theme.palette.common.white,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: 28,
  height: 28,
  padding: 0,
  color: "inherit",
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[900], 0.64),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  index: number;
  total: number;
  onNext: VoidFunction;
  onPrev: VoidFunction;
};

export default function CarouselArrowIndex({
  index,
  total,
  onNext,
  onPrev,
}: Props) {
  const theme = useTheme();

  return (
    <StyledRoot>
      <StyledIconButton onClick={onPrev}>
        <ChevronLeft size={16} />
      </StyledIconButton>

      <Typography variant="subtitle2" component="span" sx={{ mx: 0.25 }}>
        {index + 1}/{total}
      </Typography>

      <StyledIconButton onClick={onNext}>
        <ChevronRight size={16} />
      </StyledIconButton>
    </StyledRoot>
  );
}
