import Dexie, { Table } from "dexie";
import { populate } from "./SeedProfiles";

///this will act like a dbcontext
export class DbContext extends Dexie {
    profiles!: Table<Entities.Profile, number>

    constructor(){
        super("pwa-db-app")
         this.version(1).stores({
           profiles: "++id", 
         });
    }
}

export const db = new DbContext();

db.on("populate", populate);


export function resetDatabase() {
  return db.transaction("rw", db.profiles, db.profiles, async () => {
    await Promise.all(db.tables.map((table) => table.clear()));
    await populate();
  });
}
