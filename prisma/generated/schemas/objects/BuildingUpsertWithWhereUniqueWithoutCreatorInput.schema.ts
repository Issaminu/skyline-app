import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithoutCreatorInputObjectSchema } from './BuildingUpdateWithoutCreatorInput.schema';
import { BuildingUncheckedUpdateWithoutCreatorInputObjectSchema } from './BuildingUncheckedUpdateWithoutCreatorInput.schema';
import { BuildingCreateWithoutCreatorInputObjectSchema } from './BuildingCreateWithoutCreatorInput.schema';
import { BuildingUncheckedCreateWithoutCreatorInputObjectSchema } from './BuildingUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpsertWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BuildingUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => BuildingUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BuildingCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => BuildingUncheckedCreateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const BuildingUpsertWithWhereUniqueWithoutCreatorInputObjectSchema =
  Schema;
