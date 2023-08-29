import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
interface RouteButtonProps {
    data: UI.PageRoute;
    key: number;
}

const RouteButton: React.FC<RouteButtonProps> = ({ data, key }) => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    return (
        <LoadingButton
            loading={isLoading}
            size="large"
            color="secondary"
            key={key}
            onClick={() => router.push(data.route)}
        >
            {data.name}
        </LoadingButton>
    );
};

export default RouteButton;
