import { z } from 'zod';
import { BuildingCreateWithoutResidentsInputObjectSchema } from './BuildingCreateWithoutResidentsInput.schema';
import { BuildingUncheckedCreateWithoutResidentsInputObjectSchema } from './BuildingUncheckedCreateWithoutResidentsInput.schema';
import { BuildingCreateOrConnectWithoutResidentsInputObjectSchema } from './BuildingCreateOrConnectWithoutResidentsInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUncheckedCreateNestedManyWithoutResidentsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BuildingCreateWithoutResidentsInputObjectSchema),
          z.lazy(() => BuildingCreateWithoutResidentsInputObjectSchema).array(),
          z.lazy(
            () => BuildingUncheckedCreateWithoutResidentsInputObjectSchema,
          ),
          z
            .lazy(
              () => BuildingUncheckedCreateWithoutResidentsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BuildingCreateOrConnectWithoutResidentsInputObjectSchema,
          ),
          z
            .lazy(
              () => BuildingCreateOrConnectWithoutResidentsInputObjectSchema,
            )
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

export const BuildingUncheckedCreateNestedManyWithoutResidentsInputObjectSchema =
  Schema;
