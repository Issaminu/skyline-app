import {
  pgTable,
  pgEnum,
  serial,
  text,
  doublePrecision,
  timestamp,
  uniqueIndex,
  index,
  boolean,
  integer,
  bigint,
} from "drizzle-orm/pg-core";

export const houseStatus = pgEnum("HouseStatus", [
  "AVAILABLE",
  "OCCUPIED",
  "RESERVED",
]);

export const building = pgTable("Building", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  city: text("city").notNull(),
  address: text("address").notNull(),
  surface: doublePrecision("surface").notNull(),
  creatorId: text("creatorId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  thumbnail: text("thumbnail").notNull(),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const user = pgTable(
  "User",
  {
    id: text("id").primaryKey().notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    image: text("image").notNull(),
    github_username: text("github_username").unique(),
    isEmailVerified: boolean("isEmailVerified").default(false).notNull(),
    createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("User_email_key").on(table.email),
      idKey: uniqueIndex("User_id_key").on(table.id),
      idEmailIdx: index("User_id_email_idx").on(table.email, table.id),
    };
  }
);

export const house = pgTable("House", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  size: doublePrecision("size").notNull(),
  status: houseStatus("status").notNull(),
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

export const contribution = pgTable("Contribution", {
  id: serial("id").primaryKey().notNull(),
  amount: doublePrecision("amount").notNull(),
  houseId: integer("houseId")
    .notNull()
    .references(() => house.id, { onDelete: "restrict", onUpdate: "cascade" }),
  contributorId: text("contributorId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
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
  amount: doublePrecision("amount").notNull(),
  explanation: text("explanation").notNull(),
  adminId: text("adminId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const invitation = pgTable("Invitation", {
  id: serial("id").primaryKey().notNull(),
  status: text("status").notNull(),
  houseId: integer("houseId")
    .notNull()
    .references(() => house.id, { onDelete: "restrict", onUpdate: "cascade" }),
  senderId: text("senderId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
  receiverId: text("receiverId")
    .notNull()
    .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
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

export const session = pgTable(
  "Session",
  {
    id: text("id").primaryKey().notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
    idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
  },
  (table) => {
    return {
      idKey: uniqueIndex("Session_id_key").on(table.id),
      userIdIdx: index("Session_user_id_idx").on(table.userId),
    };
  }
);

export const key = pgTable(
  "Key",
  {
    id: text("id").primaryKey().notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    hashedPassword: text("hashed_password"),
  },
  (table) => {
    return {
      idKey: uniqueIndex("Key_id_key").on(table.id),
      userIdIdx: index("Key_user_id_idx").on(table.userId),
    };
  }
);
