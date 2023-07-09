import { z } from 'zod';
import { HouseCreateNestedManyWithoutBuildingInputObjectSchema } from './HouseCreateNestedManyWithoutBuildingInput.schema';
import { UserCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateNestedManyWithoutAdminOfBuildingsInput.schema';
import { UserCreateNestedOneWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateNestedOneWithoutCreatorOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateWithoutResidentsInput> = z
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
    admins: z
      .lazy(() => UserCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema)
      .optional(),
    creator: z.lazy(
      () => UserCreateNestedOneWithoutCreatorOfBuildingsInputObjectSchema,
    ),
  })
  .strict();

export const BuildingCreateWithoutResidentsInputObjectSchema = Schema;
