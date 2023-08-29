import { Layout, Page } from "@/shared/components";
import CachePlayer from "./CachePlayer";
import { Box, Grid, Paper } from "@mui/material";
import CacheViewer from "./CacheViewer";
import { useState } from "react";

const CacheRequestPage: React.FC = () => {
    const [current, setCurrent] = useState<Data.ColorGame | undefined>();
    return (
        <Page title="Cache Request">
            <Layout>
                <Grid container spacing={2}>
                    <Grid item xl={4} xs={12}>
                        <Paper>
                            <CachePlayer
                                onOpen={(data) => {
                                    setCurrent(data);
                                }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xl={8} xs={12}>
                        <CacheViewer hash={current?.hash ?? ""} />
                    </Grid>
                </Grid>
            </Layout>
        </Page>
    );
};

export default CacheRequestPage;
