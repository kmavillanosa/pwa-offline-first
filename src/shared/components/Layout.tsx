import { CreateNewFolder } from "@mui/icons-material";
import { AppBar, Toolbar, Box, Menu, Button } from "@mui/material";
import { RestoreFromTrash } from "@mui/icons-material";
import { ReactNode } from "react";
import { handleBeforeInstallPrompt } from "../utils/handleBeforeInstallPrompt";
import { resetDatabase } from "../database/DbContext";
import { useRouter } from "next/router";

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
            <Button onClick={() => resetDatabase()}>
              <RestoreFromTrash />
              Reset Database
            </Button>
          </Box>
          <Box>
            <Button onClick={() => router.push("/root/create")}>
              < CreateNewFolder />
              Create New Record
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Layout;
