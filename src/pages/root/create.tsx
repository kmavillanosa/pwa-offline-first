import dynamic from "next/dynamic";

import { CircularProgress } from "@mui/material";

const CreateProfilePage = dynamic(
  () => import("@/modules/root/CreateProfilePage"),
  {
    loading: () => <CircularProgress />,
  }
);

export default CreateProfilePage;
