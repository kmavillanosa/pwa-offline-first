import GetSharedColor from "@/shared/database/queries/getSharedColor";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useQRCode } from "next-qrcode";
import { useRouter } from "next/router";
import { enc } from "@/shared/utils/encryptionTool";

interface CacheListProps {
    type: "shared" | "self";
}

const CacheList: React.FC<CacheListProps> = ({ type }) => {
    const [data, setData] = useState<Entities.Color[]>();

    const router = useRouter();

    const { Canvas } = useQRCode();

    useEffect(() => {
        GetSharedColor(type)
            .then((resp) => {
                setData(resp);
            })
            .catch((err) => { });
    }, []);

    if (!data) return <div>No Data</div>;

    return (
        <div>
            <List>
                {data.map((item, idx) => {
                    return (
                        <span key={idx}>
                            <ListItem color="success" alignItems="flex-start" key={idx}>
                                <ListItemAvatar>
                                    <Canvas
                                        logo={{ src: "/images/application128.png" }}
                                        text={`${window.location.protocol}//${window.location.host
                                            }${router.basePath}/cache-request/add/${enc(
                                                JSON.stringify(item)
                                            )}}`}
                                        options={{
                                            errorCorrectionLevel: "M",
                                            margin: 3,
                                            scale: 1,
                                            width: 200,
                                            color: {
                                                dark: "#2f3542",
                                                light: "#ffffff",
                                            },
                                        }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<strong>{item.hash}</strong>}
                                    secondary={
                                        <div>
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
                                            <img
                                                height={100}
                                                width={100}
                                                src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${item.hash}`}
                                                alt="avatar"
                                            />
                                        </div>
                                    }
                                />
                            </ListItem>
                        </span>
                    );
                })}
            </List>
        </div>
    );
};
export default CacheList;
