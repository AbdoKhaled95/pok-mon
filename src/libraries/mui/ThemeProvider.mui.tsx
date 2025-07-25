import useThemeProvider from "@hooks/useThemeProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
type Props = {
  children: React.ReactNode;
};
const MuiThemeProvider = ({ children }: Props) => {
  const { theme } = useThemeProvider();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
