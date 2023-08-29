import { db } from "../DbContext";

const GetSharedColor = async () => {
    return await db.colors.where({ origin: "shared" }).toArray();
};

export default GetSharedColor;
