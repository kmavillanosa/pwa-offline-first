import { db } from "./DbContext";
export async function populate() {
  await db.profiles.bulkAdd([
    {
      id: 1,
      firstName: "kim",
      lastName: "avillanosa",
    },
    {
      id: 2,
      firstName: "mark",
      lastName: "peralta",
    },
    {
      id: 3,
      firstName: "elmer",
      lastName: "robles",
    },
  ]);
}
