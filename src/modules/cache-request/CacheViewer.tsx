import GetColor from "@/shared/database/queries/getColor";
import { Alert, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useQRCode } from "next-qrcode";
import Link from "next/link";
import { useRouter } from "next/router";
import { enc, dec } from "@/sharedutils/encryptionTool";

interface CacheViewerProps {
    hash: string;
}

const CacheViewer: React.FC<CacheViewerProps> = ({ hash }) => {
    const router = useRouter();

    const [data, setData] = useState<Entities.Color>();
    const [newHash, setNewHash] = useState("");

    const { Canvas } = useQRCode();

    useEffect(() => {
        GetColor(hash)
            .then((resp) => {
                setData(resp);
                var value = enc(JSON.stringify(resp));
                setNewHash(value);
            })
            .catch((err) => {
                alert("Error Detected");
            });
    }, [hash]);

    if (!data) return <p>No Data</p>;

    const baseUrl = `${window.location.protocol}//${window.location.host}${router.basePath}/cache-request/add/${newHash}}`;

    return (
        <>
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
                    src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${hash}`}
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

                <Canvas
                    logo={{ src: "/images/application128.png" }}
                    text={baseUrl}
                    options={{
                        errorCorrectionLevel: "M",
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                            dark: "#2f3542",
                            light: "#ffffff",
                        },
                    }}
                />

                <Typography style={{ margin: 10 }}>
                    Scan to save on your device
                </Typography>

                <Link href={`/cache-request/add/${newHash}`} target="_blank">
                    <Button variant="outlined">Open Link</Button>
                </Link>
                <Alert style={{ margin: 20 }}>
                    This information only exist on your device unless others scan and save
                    it on theirs.
                </Alert>
            </div>
        </>
    );
};

export default CacheViewer;
