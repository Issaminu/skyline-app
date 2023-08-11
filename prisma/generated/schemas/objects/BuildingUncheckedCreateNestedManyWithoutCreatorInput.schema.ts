import { z } from 'zod';
import { BuildingCreateWithoutCreatorInputObjectSchema } from './BuildingCreateWithoutCreatorInput.schema';
import { BuildingUncheckedCreateWithoutCreatorInputObjectSchema } from './BuildingUncheckedCreateWithoutCreatorInput.schema';
import { BuildingCreateOrConnectWithoutCreatorInputObjectSchema } from './BuildingCreateOrConnectWithoutCreatorInput.schema';
import { BuildingCreateManyCreatorInputEnvelopeObjectSchema } from './BuildingCreateManyCreatorInputEnvelope.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUncheckedCreateNestedManyWithoutCreatorInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BuildingCreateWithoutCreatorInputObjectSchema),
          z.lazy(() => BuildingCreateWithoutCreatorInputObjectSchema).array(),
          z.lazy(() => BuildingUncheckedCreateWithoutCreatorInputObjectSchema),
          z
            .lazy(() => BuildingUncheckedCreateWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BuildingCreateOrConnectWithoutCreatorInputObjectSchema),
          z
            .lazy(() => BuildingCreateOrConnectWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BuildingCreateManyCreatorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BuildingWhereUniqueInputObjectSchema),
          z.lazy(() => BuildingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BuildingUncheckedCreateNestedManyWithoutCreatorInputObjectSchema =
  Schema;
