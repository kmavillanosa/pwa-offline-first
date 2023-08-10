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
            <Button
              startIcon={<CreateNewFolder />}
              onClick={() => router.push("/root/create")}
            >
              Create New Record
            </Button>
          </Box>
          <Box>
            <Button
              startIcon={<RestoreFromTrash />}
              onClick={() => resetDatabase()}
            >
              Reset Database
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Layout;
