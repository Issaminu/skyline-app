import { sql } from "drizzle-orm";
import {
  pgTable,
  pgEnum,
  serial,
  text,
  integer,
  timestamp,
  doublePrecision,
  uniqueIndex,
  index,
  boolean,
} from "drizzle-orm/pg-core";

export const user = pgTable(
  "User",
  {
    id: text("id").primaryKey().notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    image: text("image").notNull(),
    isEmailVerified: boolean("isEmailVerified").default(false).notNull(),
    createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("User_email_key").on(table.email),
      idEmailIdx: index("User_id_email_idx").on(table.id, table.email),
      idKey: uniqueIndex("User_id_key").on(table.id),
    };
  }
);

export const houseStatusEnum = pgEnum("HouseStatus", [
  "RESERVED",
  "OCCUPIED",
  "AVAILABLE",
]);

export const invitation = pgTable("Invitation", {
  id: serial("id").primaryKey().notNull(),
  status: text("status").notNull(),
  senderId: text("senderId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  receiverId: text("receiverId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  houseId: integer("houseId")
    .notNull()
    .references(() => house.id, { onDelete: "restrict", onUpdate: "cascade" }),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const building = pgTable("Building", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  city: text("city").notNull(),
  address: text("address").notNull(),
  surface: doublePrecision("surface").notNull(),
  thumbnail: text("thumbnail").notNull(),
  creatorId: text("creatorId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const contribution = pgTable("Contribution", {
  id: serial("id").primaryKey().notNull(),
  amount: doublePrecision("amount").notNull(),
  contributorId: text("contributorId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  houseId: integer("houseId")
    .notNull()
    .references(() => house.id, { onDelete: "restrict", onUpdate: "cascade" }),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" }).notNull(),
});

export const house = pgTable("House", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  size: doublePrecision("size").notNull(),
  status: houseStatusEnum("status").notNull(),
  buildingId: integer("buildingId")
    .notNull()
    .references(() => building.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const expense = pgTable("Expense", {
  id: serial("id").primaryKey().notNull(),
  beneficiary: text("beneficiary").notNull(),
  adminId: text("adminId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  amount: doublePrecision("amount").notNull(),
  explanation: text("explanation").notNull(),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const admins = pgTable(
  "_Admins",
  {
    a: integer("A")
      .notNull()
      .references(() => building.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    b: text("B")
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => {
    return {
      abUnique: uniqueIndex("_Admins_AB_unique").on(table.a, table.b),
      bIdx: index().on(table.b),
    };
  }
);

export const residents = pgTable(
  "_Residents",
  {
    a: integer("A")
      .notNull()
      .references(() => building.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    b: text("B")
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => {
    return {
      abUnique: uniqueIndex("_Residents_AB_unique").on(table.a, table.b),
      bIdx: index().on(table.b),
    };
  }
);
