import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { orange, teal } from "@mui/material/colors";

interface LayoutProps {
  children: ReactNode;
}

const useTheme = createTheme({
  palette: {
    primary: {
      main: "#3742fa",
    },
    secondary: {
      main: "#dfe4ea",
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <ThemeProvider theme={useTheme}>
      <CssBaseline />
      <Grid component={"main"}>
        <AppBar position="sticky">
          <Toolbar>
            <img
              style={{ margin: "10px", height: "50px" }}
              src="/images/application128.png"
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PWA SAMPLE APP
            </Typography>
            <Box>
              <Button color="secondary" onClick={() => router.push("/root")}>
                Home
              </Button>
              <Button
                color="secondary"
                onClick={() => router.push("/printing")}
              >
                Printing
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box margin={3}>{children}</Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Layout;
