import { db } from "../DbContext";

const GetColorByOrigin = async (origin: "shared" | "self") => {
    return await db.colors.where({ origin: origin }).reverse().sortBy("id");
};

export default GetColorByOrigin;
