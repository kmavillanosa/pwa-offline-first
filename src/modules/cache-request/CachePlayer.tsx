import {
    Folder,
    OpenInBrowser,
    OpenWithOutlined,
    PlayArrowOutlined,
    Restore,
    Start,
    StopCircleSharp,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Chip,
    Alert,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Table,
    TableHead,
    Typography,
    Toolbar,
    Divider,
    ListItemText,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useEffect, useState } from "react";

const CachePlayer = () => {
    const [result, setResults] = useState<Data.ColorGame[]>([]);

    const [isRunning, setRunning] = useState(false);

    const PlayStop = () => {
        setRunning(!isRunning);
    };

    const Reset = () => {
        setResults([]);
    };

    const Play = () => {
        fetch("/api/play")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    let newResult = data as Data.ColorGame;
                    setResults((prevResults) => [...prevResults, newResult]);
                }, 100);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                Play();
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    return (
        <>
            <Alert color="info">
                The purpose of this is to generate random data to be cached and
                retrieved. Click <strong>Start</strong> to begin fetching, press{" "}
                <strong>Stop</strong> to end the fetching process and{" "}
                <strong>Reset</strong> to clear of the data
            </Alert>
            <Toolbar>
                <LoadingButton
                    size="small"
                    style={{ margin: 2 }}
                    variant="contained"
                    color={isRunning ? "error" : "success"}
                    endIcon={isRunning ? <StopCircleSharp /> : <PlayArrowOutlined />}
                    onClick={PlayStop}
                >
                    {isRunning ? "Stop" : "Start"}
                </LoadingButton>
                <Button
                    size="small"
                    disabled={result.length <= 0 || isRunning}
                    style={{ margin: 2 }}
                    variant="contained"
                    color="inherit"
                    endIcon={<Restore />}
                    onClick={Reset}
                >
                    Reset
                </Button>
                <Chip
                    style={{ margin: 10 }}
                    size="medium"
                    color="default"
                    label={`${result.length} result(s) were generated.`}
                />
            </Toolbar>
            <Box>
                <List>
                    {result.map((item, idx) => {
                        return (
                            <span key={idx}>
                                <ListItem
                                    alignItems="flex-start"
                                    key={idx}
                                    secondaryAction={
                                        <IconButton>
                                            <Folder />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText
                                        primary={<strong>{item.hash}</strong>}
                                        secondary={
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                {item.result.map((colorItem, colorIdx) => {
                                                    return (
                                                        <div
                                                            key={colorIdx}
                                                            style={{
                                                                borderWidth: "2px",
                                                                borderColor: "#212121",
                                                                borderStyle: "solid",
                                                                borderRadius: "3px",
                                                                margin: 5,
                                                                height: 30,
                                                                width: 30,
                                                                backgroundColor: colorItem,
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </span>
                        );
                    })}
                </List>
            </Box>
        </>
    );
};

export default CachePlayer;
