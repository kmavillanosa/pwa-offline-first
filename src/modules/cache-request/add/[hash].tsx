import { Layout, Page } from "@/shared/components";
import GetColor from "@/shared/database/queries/getColor";
import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useQRCode } from "next-qrcode";
import Link from "next/link";
import { useRouter } from "next/router";
import { createAvatar } from "@dicebear/core";
import { pixelArt } from "@dicebear/collection";
import Image from "next/image";
import { Cancel, Check } from "@mui/icons-material";
import { dec } from "@/sharedutils/encryptionTool";
import { db } from "@/shared/database/DbContext";

const AddCacheToDevice = () => {
    const router = useRouter();

    const { hash } = router.query;

    const [data, setData] = useState<Entities.Color>();
    const [dataExists, setExists] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (hash) {
                const newHash = dec(hash);
                const data: Entities.Color = JSON.parse(newHash);
                setData(data);
                GetColor(data.hash as string)
                    .then((resp) => {
                        if (resp) {
                            setExists(true);
                        } else {
                            setExists(false);
                        }
                    })
                    .catch((err) => {
                        setExists(false);
                    });
            }
        }, 2000);
    }, [hash]);

    if (!data) return <CircularProgress />;

    const renderExist = () => {
        return <Alert>This profile already exist on your device</Alert>;
    };

    const renderDoesNotExist = () => {
        return (
            <>
                <Alert style={{ margin: 20 }}>
                    By clicking <strong>Accept</strong> you save this profile on your
                    device
                </Alert>
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            margin: 5,
                        }}
                    >
                        <Button
                            onClick={() => {
                                db.colors.add({
                                    origin: "shared",
                                    hash: data.hash,
                                    result: data.result,
                                });
                                router.push("/cache-request");
                            }}
                            startIcon={<Check />}
                            color="success"
                            variant="outlined"
                        >
                            Accept
                        </Button>
                    </div>
                    <div
                        style={{
                            margin: 5,
                        }}
                    >
                        <Button
                            onClick={() => {
                                router.push("/cache-request");
                            }}
                            startIcon={<Cancel />}
                            color="error"
                            variant="outlined"
                        >
                            Reject
                        </Button>
                    </div>
                </div>
            </>
        );
    };

    return (
        <Page title="New Profile">
            <Layout>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <img
                        height={100}
                        width={100}
                        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${data.hash}`}
                        alt="avatar"
                    />
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        {data.result.map((colorItem, colorIdx) => {
                            return (
                                <div
                                    key={colorIdx}
                                    style={{
                                        borderWidth: "2px",
                                        borderColor: "#212121",
                                        borderStyle: "solid",
                                        borderRadius: "3px",
                                        margin: 5,
                                        height: 10,
                                        width: 10,
                                        backgroundColor: colorItem,
                                    }}
                                />
                            );
                        })}
                    </div>
                    <Typography>Profile Scanned</Typography>
                    {dataExists == true ? renderExist() : renderDoesNotExist()}
                </div>
            </Layout>
        </Page>
    );
};

export default AddCacheToDevice;
