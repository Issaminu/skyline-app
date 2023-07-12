import { z } from 'zod';
import { BuildingCreateWithoutAdminsInputObjectSchema } from './BuildingCreateWithoutAdminsInput.schema';
import { BuildingUncheckedCreateWithoutAdminsInputObjectSchema } from './BuildingUncheckedCreateWithoutAdminsInput.schema';
import { BuildingCreateOrConnectWithoutAdminsInputObjectSchema } from './BuildingCreateOrConnectWithoutAdminsInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUncheckedCreateNestedManyWithoutAdminsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BuildingCreateWithoutAdminsInputObjectSchema),
          z.lazy(() => BuildingCreateWithoutAdminsInputObjectSchema).array(),
          z.lazy(() => BuildingUncheckedCreateWithoutAdminsInputObjectSchema),
          z
            .lazy(() => BuildingUncheckedCreateWithoutAdminsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BuildingCreateOrConnectWithoutAdminsInputObjectSchema),
          z
            .lazy(() => BuildingCreateOrConnectWithoutAdminsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BuildingWhereUniqueInputObjectSchema),
          z.lazy(() => BuildingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BuildingUncheckedCreateNestedManyWithoutAdminsInputObjectSchema =
  Schema;
