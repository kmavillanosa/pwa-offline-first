import Dexie, { Table } from "dexie";
import { populate } from "./populate";

///this will act like a dbcontext
export class DbContext extends Dexie {
  profiles!: Table<Entities.Profile, number>;
  tranx!: Table<Entities.Transaction, number>;
  colors!: Table<Entities.Color, number>;

  constructor() {
    super("pwa-db-app");
    this.version(1).stores({
      profiles: "++id",
      tranx: "++id",
      colors: "++id, hash, origin",
    });
  }
}

export const db = new DbContext();

db.on("populate", populate);

export function resetDatabase() {
  db.tables.map((table) => table.clear());
  populate();
}
