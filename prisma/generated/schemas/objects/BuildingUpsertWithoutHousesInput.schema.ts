import { z } from 'zod';
import { BuildingUpdateWithoutHousesInputObjectSchema } from './BuildingUpdateWithoutHousesInput.schema';
import { BuildingUncheckedUpdateWithoutHousesInputObjectSchema } from './BuildingUncheckedUpdateWithoutHousesInput.schema';
import { BuildingCreateWithoutHousesInputObjectSchema } from './BuildingCreateWithoutHousesInput.schema';
import { BuildingUncheckedCreateWithoutHousesInputObjectSchema } from './BuildingUncheckedCreateWithoutHousesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpsertWithoutHousesInput> = z
  .object({
    update: z.union([
      z.lazy(() => BuildingUpdateWithoutHousesInputObjectSchema),
      z.lazy(() => BuildingUncheckedUpdateWithoutHousesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BuildingCreateWithoutHousesInputObjectSchema),
      z.lazy(() => BuildingUncheckedCreateWithoutHousesInputObjectSchema),
    ]),
  })
  .strict();

export const BuildingUpsertWithoutHousesInputObjectSchema = Schema;
