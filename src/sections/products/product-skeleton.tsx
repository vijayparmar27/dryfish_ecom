// @mui
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Paper, { PaperProps } from "@mui/material/Paper";
import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

export function ProductItemSkeleton({ sx, ...other }: PaperProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <Stack sx={{ p: 1 }}>
        <Skeleton sx={{ paddingTop: "100%" }} />
      </Stack>

      <Stack spacing={2} sx={{ p: 3, pt: 2 }}>
        <Skeleton sx={{ width: 0.5, height: 16 }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row">
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
          </Stack>
          <Skeleton sx={{ width: 40, height: 16 }} />
        </Stack>
      </Stack>
    </Paper>
  );
}

// ----------------------------------------------------------------------

export function ProductDetailsSkeleton({ ...other }: PaperProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 8,
        gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)" },
      }}
      {...other}
    >
      <Box sx={{ gridColumn: { xs: "span 1", md: "span 6", lg: "span 7" } }}>
        <Skeleton sx={{ paddingTop: "100%" }} />
      </Box>

      <Box sx={{ gridColumn: { xs: "span 1", md: "span 6", lg: "span 5" } }}>
        <Stack spacing={3}>
          <Skeleton variant="circular" sx={{ width: 80, height: 80 }} />
          <Skeleton sx={{ height: 240 }} />
          <Skeleton sx={{ height: 16 }} />
          <Skeleton sx={{ height: 16, width: 0.75 }} />
          <Skeleton sx={{ height: 16, width: 0.5 }} />
        </Stack>
      </Box>

      <Box sx={{ gridColumn: "1 / -1" }}>
        <Stack direction="row" alignItems="center">
          {[...Array(3)].map((_, index) => (
            <Stack
              key={index}
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ width: 1 }}
            >
              <Skeleton variant="circular" sx={{ width: 80, height: 80 }} />
              <Skeleton sx={{ height: 16, width: 160 }} />
              <Skeleton sx={{ height: 16, width: 80 }} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
