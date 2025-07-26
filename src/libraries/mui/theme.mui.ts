import { createTheme } from "@mui/material/styles";
import { components, breakpoints } from "./commons.mui";
import { PALETTE_COLORS } from "@enums/themes.enum";
import { type appThemeValue, type PalateMode } from "@models/theme.model";

export const theme = ({
  theme,
  mode,
}: {
  theme: appThemeValue;
  mode: PalateMode;
}) =>
  createTheme({
    cssVariables: true,
    components,
    breakpoints,
    palette: {
      mode: mode,

      text: {
        primary: PALETTE_COLORS.TEXT_PRIMARY[theme],
        third: PALETTE_COLORS.TEXT_THIRD[theme],
      },
      background: {
        default: PALETTE_COLORS.BACKGROUND_DEFAULT[theme],
        overlay: PALETTE_COLORS.BACKGROUND_OVERLAY[theme],
        pageControl: PALETTE_COLORS.BACKGROUND_PAGE_CONTROL[theme],
        loadMore: PALETTE_COLORS.BACKGROUND_LOAD_MORE[theme],
        cover: PALETTE_COLORS.BACKGROUND_COVER[theme],
        infoCardHead: PALETTE_COLORS.BACKGROUND_INFO_CARD_HEAD[theme],
        details: PALETTE_COLORS.BACKGROUND_DETAILS[theme],
      },
      border: {
        primary: PALETTE_COLORS.BORDER_PRIMARY[theme],
      },
      action: {
        hover: PALETTE_COLORS.ACTION_HOVER[theme],
      },
    },
    typography: {
      // fontFamily: '"Lato", sans-serif',
    },
  });
