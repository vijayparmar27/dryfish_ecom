import { m, AnimatePresence } from "framer-motion";
// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
// utils
import { fData } from "@/utils/format-number";
//
import { Iconify } from "../iconify";
import { varFade } from "../animate";
import FileThumbnail, { fileData } from "../file-thumbnail";
//
import { UploadProps } from "./types";

// ----------------------------------------------------------------------

export default function MultiFilePreview({
  thumbnail,
  files,
  onRemove,
  sx,
}: UploadProps) {
  return (
    <AnimatePresence initial={false}>
      {files?.map((file) => {
        const { key, name = "", size = 0 } = fileData(file);

        const isNotFormatFile = typeof file === "string";

        if (thumbnail) {
          return (
            <m.div
              key={key}
              {...(varFade().inUp as any)}
              style={{ display: "inline-flex" }}
            >
              <Box
                sx={{
                  m: 0.5,
                  width: 80,
                  height: 80,
                  borderRadius: 1.25,
                  overflow: "hidden",
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: (theme) =>
                    `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
                  ...sx,
                }}
              >
                <FileThumbnail
                  tooltip
                  imageView
                  file={file}
                  sx={{ position: "absolute" }}
                  imgSx={{ position: "absolute" }}
                />

                {onRemove && (
                  <IconButton
                    size="small"
                    onClick={() => onRemove(file)}
                    sx={{
                      p: 0.5,
                      top: 4,
                      right: 4,
                      position: "absolute",
                      color: "common.white",
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
                      "&:hover": {
                        bgcolor: (theme) =>
                          alpha(theme.palette.grey[900], 0.72),
                      },
                    }}
                  >
                    <Iconify icon="mingcute:close-line" width={14} />
                  </IconButton>
                )}
              </Box>
            </m.div>
          );
        }

        return (
          <m.div key={key} {...(varFade().inUp as any)}>
            <Box
              sx={{
                my: 1,
                py: 1,
                px: 1.5,
                borderRadius: 1,
                border: (theme) =>
                  `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                ...sx,
              }}
            >
              <FileThumbnail file={file} />

              <ListItemText
                primary={isNotFormatFile ? file : name}
                secondary={isNotFormatFile ? "" : fData(size)}
                secondaryTypographyProps={{
                  component: "span",
                  typography: "caption",
                }}
              />

              {onRemove && (
                <IconButton size="small" onClick={() => onRemove(file)}>
                  <Iconify icon="mingcute:close-line" width={16} />
                </IconButton>
              )}
            </Box>
          </m.div>
        );
      })}
    </AnimatePresence>
  );
}
