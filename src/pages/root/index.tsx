import dynamic from "next/dynamic";

import { CircularProgress } from "@mui/material";

const RootPage = dynamic(() => import("@/modules/root/RootPage"), {
    loading: () => <CircularProgress />,
});

export default RootPage;
