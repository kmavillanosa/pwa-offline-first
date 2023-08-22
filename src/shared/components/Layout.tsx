import { AppBar, Toolbar, Box, Menu, Button } from "@mui/material";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <Box boxShadow="none" component={"main"}>
      <AppBar color="transparent" position="sticky">
        <Toolbar>
          <img
            style={{ margin: "10px", height: "50px" }}
            src="/images/application128.png"
          />

          <Box>
            <Button onClick={() => router.push("/root")}>Home</Button>
            <Button onClick={() => router.push("/printing")}>Printing</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box margin={3}>{children}</Box>
    </Box>
  );
};

export default Layout;
