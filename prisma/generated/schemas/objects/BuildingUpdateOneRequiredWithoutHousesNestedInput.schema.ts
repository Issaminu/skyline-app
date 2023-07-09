import { z } from 'zod';
import { BuildingCreateWithoutHousesInputObjectSchema } from './BuildingCreateWithoutHousesInput.schema';
import { BuildingUncheckedCreateWithoutHousesInputObjectSchema } from './BuildingUncheckedCreateWithoutHousesInput.schema';
import { BuildingCreateOrConnectWithoutHousesInputObjectSchema } from './BuildingCreateOrConnectWithoutHousesInput.schema';
import { BuildingUpsertWithoutHousesInputObjectSchema } from './BuildingUpsertWithoutHousesInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithoutHousesInputObjectSchema } from './BuildingUpdateWithoutHousesInput.schema';
import { BuildingUncheckedUpdateWithoutHousesInputObjectSchema } from './BuildingUncheckedUpdateWithoutHousesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateOneRequiredWithoutHousesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BuildingCreateWithoutHousesInputObjectSchema),
          z.lazy(() => BuildingUncheckedCreateWithoutHousesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BuildingCreateOrConnectWithoutHousesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => BuildingUpsertWithoutHousesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BuildingWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BuildingUpdateWithoutHousesInputObjectSchema),
          z.lazy(() => BuildingUncheckedUpdateWithoutHousesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BuildingUpdateOneRequiredWithoutHousesNestedInputObjectSchema =
  Schema;
