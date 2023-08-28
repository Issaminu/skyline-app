import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL || "";
export const sql = postgres(connectionString, { max: 1 });
export const db = drizzle(sql);

const asyncMigrate = async () => {
  await migrate(db, { migrationsFolder: "drizzle/output" });
};
asyncMigrate();
