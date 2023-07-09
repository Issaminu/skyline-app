import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithoutCreatorInputObjectSchema } from './BuildingUpdateWithoutCreatorInput.schema';
import { BuildingUncheckedUpdateWithoutCreatorInputObjectSchema } from './BuildingUncheckedUpdateWithoutCreatorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BuildingUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => BuildingUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const BuildingUpdateWithWhereUniqueWithoutCreatorInputObjectSchema =
  Schema;
