import { phoneRegex } from "@/lib/utils";
import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  name: z
    .string()
    .regex(/^[a-zA-Z][a-zA-Z ]*$/)
    .min(1)
    .max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  phone: z.string().regex(phoneRegex, "Invalid phone number!"),
  image: z.string().url(),
  isEmailVerified: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export const userSchemaCreate = UserSchema.omit({
  id: true,
  createdAt: true,
  isEmailVerified: true,
  updatedAt: true,
});
export const userSchemaUpdate = UserSchema.omit({
  createdAt: true,
  updatedAt: true,
  password: true,
});
export const userSchemaDelete = UserSchema.pick({
  id: true,
});
export const userSchemaLogin = UserSchema.pick({
  email: true,
  password: true,
});

// -----------------------------
// -----------------------------

export const BuildingSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1).max(200),
  city: z.string().min(1).max(100),
  address: z.string().min(1).max(500),
  surface: z.number(),
  thumbnail: z.string().url(),
  creatorId: z.number().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const buildingSchemaCreate = BuildingSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const buildingSchemaUpdate = BuildingSchema.omit({
  createdAt: true,
  updatedAt: true,
  creatorId: true,
});

export const buildingSchemaDelete = BuildingSchema.pick({
  id: true,
});

// -----------------------------
// -----------------------------

export enum HouseStatus {
  AVAILABLE = "AVAILABLE",
  OCCUPIED = "OCCUPIED",
  RESERVED = "RESERVED",
}

export const HouseSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1).max(200),
  size: z.number(),
  status: z.enum([
    HouseStatus.AVAILABLE,
    HouseStatus.OCCUPIED,
    HouseStatus.RESERVED,
  ]),
  // Building: z.typ(Building),
  thumbnail: z.string().url(),
  creatorId: z.number().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// -----------------------------
// -----------------------------

const userSchemaGlobal = UserSchema.omit({
  password: true,
  isEmailVerified: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  residentOfBuildings: z.array(BuildingSchema),
});
export type User = z.infer<typeof userSchemaGlobal>;

const buildingSchemaGlobal = BuildingSchema.omit({
  createdAt: true,
  updatedAt: true,
});
export type Building = z.infer<typeof buildingSchemaGlobal>;
