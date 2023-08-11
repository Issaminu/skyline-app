import { z } from 'zod';
import { UserCreateNestedManyWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateNestedManyWithoutResidentOfBuildingsInput.schema';
import { UserCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateNestedManyWithoutAdminOfBuildingsInput.schema';
import { UserCreateNestedOneWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateNestedOneWithoutCreatorOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateWithoutHousesInput> = z
  .object({
    name: z.string(),
    city: z.string(),
    address: z.string(),
    surface: z.number(),
    thumbnail: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    residents: z
      .lazy(
        () => UserCreateNestedManyWithoutResidentOfBuildingsInputObjectSchema,
      )
      .optional(),
    admins: z
      .lazy(() => UserCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema)
      .optional(),
    creator: z.lazy(
      () => UserCreateNestedOneWithoutCreatorOfBuildingsInputObjectSchema,
    ),
  })
  .strict();

export const BuildingCreateWithoutHousesInputObjectSchema = Schema;
