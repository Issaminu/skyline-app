import { z } from 'zod';
import { HouseUncheckedCreateNestedManyWithoutBuildingInputObjectSchema } from './HouseUncheckedCreateNestedManyWithoutBuildingInput.schema';
import { UserUncheckedCreateNestedManyWithoutResidentOfBuildingsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutResidentOfBuildingsInput.schema';
import { UserUncheckedCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutAdminOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUncheckedCreateWithoutCreatorInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    city: z.string(),
    address: z.string(),
    surface: z.number(),
    thumbnail: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    houses: z
      .lazy(
        () => HouseUncheckedCreateNestedManyWithoutBuildingInputObjectSchema,
      )
      .optional(),
    residents: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutResidentOfBuildingsInputObjectSchema,
      )
      .optional(),
    admins: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BuildingUncheckedCreateWithoutCreatorInputObjectSchema = Schema;
