import GetSharedColor from "@/shared/database/queries/getSharedColor";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

const SharedCache: React.FC = () => {
    const [data, setData] = useState<Entities.Color[]>();

    useEffect(() => {
        GetSharedColor()
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
                                    <img
                                        height={100}
                                        width={100}
                                        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${item.hash}`}
                                        alt="avatar"
                                    />
                                </ListItemAvatar>
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
                        </span>
                    );
                })}
            </List>
        </div>
    );
};
export default SharedCache;
