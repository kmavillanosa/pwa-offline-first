import dynamic from "next/dynamic";

import { CircularProgress } from "@mui/material";

const PrintingPage = dynamic(() => import("@/modulesprinting/PrintingPage"), {
  loading: () => <CircularProgress />,
});

export default PrintingPage;
