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
  IconButton,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { orange, teal } from "@mui/material/colors";
import RouteButton from "./RouteButton";
import { db, deleteDatabase } from "@/shareddatabase/DbContext";
import { Restore } from "@mui/icons-material";

interface LayoutProps {
  children: ReactNode;
}

const useTheme = createTheme({
  palette: {
    primary: {
      main: "#1e272e",
    },
    secondary: {
      main: "#d2dae2",
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const [routes, setRoutes] = useState<UI.PageRoute[]>([]);

  useEffect(() => {
    fetch("/api/routes")
      .then((response) => response.json())
      .then((data) => {
        setRoutes(data as UI.PageRoute[]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
              PWA APP
            </Typography>
            <Box>
              <IconButton
                title="reset all data"
                color="secondary"
                onClick={() => {
                  deleteDatabase();
                  router.reload();
                }}
              >
                <Restore />
              </IconButton>

              {routes.map((item, idx) => (
                <RouteButton key={idx} data={item} />
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <small style={{ margin: 10 }}>© kmavillanosa</small>
        <Box margin={3}>{children}</Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Layout;
