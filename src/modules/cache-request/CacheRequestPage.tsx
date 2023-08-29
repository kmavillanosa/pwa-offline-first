import { Layout, Page } from "@/shared/components";
import CachePlayer from "./CachePlayer";
import { Box, Grid, Paper } from "@mui/material";
import CacheViewer from "./CacheViewer";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import dynamic from "next/dynamic";


const CacheList = dynamic(() => import("@/modulescache-request/CacheList"))


const CacheRequestPage: React.FC = () => {
    const [current, setCurrent] = useState<Data.ColorGame | undefined>();

    const [value, setValue] = useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <TabList
                                    onChange={handleChange}
                                >
                                    <Tab label="Viewer" value="1" />
                                    <Tab label="My List" value="2" />
                                    <Tab label="Shared to me" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <CacheViewer hash={current?.hash ?? ""} />
                            </TabPanel>
                            <TabPanel value="2">
                                <CacheList type="self" />
                            </TabPanel>
                            <TabPanel value="3">
                                <CacheList type="shared" />
                            </TabPanel>
                        </TabContext>
                    </Grid>
                </Grid>
            </Layout>
        </Page>
    );
};

export default CacheRequestPage;
