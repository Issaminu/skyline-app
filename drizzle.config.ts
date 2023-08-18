/** @type {import('drizzle-kit').Config} */
module.exports = {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/output",
  driver: "pg",
  dbCredentials: {
    connectionString:
      process.env.DATABASE_URL ||
      "postgresql://postgres:@localhost:5432/skylineapp",
  },
};
