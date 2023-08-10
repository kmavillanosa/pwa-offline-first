import { Adb } from "@mui/icons-material";
import { AppBar, Toolbar, Box, Menu, Button } from "@mui/material";
import { RestoreFromTrash } from "@mui/icons-material";
import { ReactNode } from "react";
import { handleBeforeInstallPrompt } from "../utils/handleBeforeInstallPrompt";
import { resetDatabase } from "../database/DbContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
            <div id="install-button-container"></div>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Layout;
