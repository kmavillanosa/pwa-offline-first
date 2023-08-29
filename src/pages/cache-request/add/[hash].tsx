import dynamic from "next/dynamic";

import { CircularProgress } from "@mui/material";

const AddCacheToDevice = dynamic(() => import("@/modules/cache-request/add/[hash]"), {
    loading: () => <CircularProgress />,
});

export default AddCacheToDevice;
