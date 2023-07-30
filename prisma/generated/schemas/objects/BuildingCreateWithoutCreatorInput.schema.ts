import { z } from 'zod';
import { HouseCreateNestedManyWithoutBuildingInputObjectSchema } from './HouseCreateNestedManyWithoutBuildingInput.schema';
import { UserCreateNestedManyWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateNestedManyWithoutResidentOfBuildingsInput.schema';
import { UserCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateNestedManyWithoutAdminOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateWithoutCreatorInput> = z
  .object({
    name: z.string(),
    city: z.string(),
    address: z.string(),
    surface: z.number(),
    thumbnail: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    houses: z
      .lazy(() => HouseCreateNestedManyWithoutBuildingInputObjectSchema)
      .optional(),
    residents: z
      .lazy(
        () => UserCreateNestedManyWithoutResidentOfBuildingsInputObjectSchema,
      )
      .optional(),
    admins: z
      .lazy(() => UserCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema)
      .optional(),
  })
  .strict();

export const BuildingCreateWithoutCreatorInputObjectSchema = Schema;