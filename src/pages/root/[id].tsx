import dynamic from "next/dynamic";

import { CircularProgress } from "@mui/material";

const UpdateProfilePage = dynamic(
  () => import("@/modules/root/UpdateProfilePage"),
  {
    loading: () => <CircularProgress />,
  }
);

export default UpdateProfilePage;
