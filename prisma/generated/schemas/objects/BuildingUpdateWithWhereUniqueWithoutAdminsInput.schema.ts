import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithoutAdminsInputObjectSchema } from './BuildingUpdateWithoutAdminsInput.schema';
import { BuildingUncheckedUpdateWithoutAdminsInputObjectSchema } from './BuildingUncheckedUpdateWithoutAdminsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateWithWhereUniqueWithoutAdminsInput> =
  z
    .object({
      where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BuildingUpdateWithoutAdminsInputObjectSchema),
        z.lazy(() => BuildingUncheckedUpdateWithoutAdminsInputObjectSchema),
      ]),
    })
    .strict();

export const BuildingUpdateWithWhereUniqueWithoutAdminsInputObjectSchema =
  Schema;
