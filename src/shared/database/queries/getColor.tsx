import { db } from "../DbContext";

const GetColor = async (hash: string) => {
    return await db.colors.where({ hash: hash }).first();
};

export default GetColor;
