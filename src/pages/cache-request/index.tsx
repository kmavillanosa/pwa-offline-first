import dynamic from "next/dynamic";

import { CircularProgress } from "@mui/material";

const CacheRequestPage = dynamic(() => import("@/modulescache-request/CacheRequestPage"), {
    loading: () => <CircularProgress />,
});

export default CacheRequestPage;
