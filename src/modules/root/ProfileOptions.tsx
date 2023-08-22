import { Toolbar, Box, Button } from "@mui/material";
import { RestoreFromTrash } from "@mui/icons-material";
import { CreateNewFolder } from "@mui/icons-material";
import { db, resetDatabase } from "@/shareddatabase/DbContext";
import { useLiveQuery } from "dexie-react-hooks";
import { useRouter } from "next/router";

const ProfileOptions = () => {
  const router = useRouter();

  return (
    <Toolbar>
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
  );
};

export default ProfileOptions;
