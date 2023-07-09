import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithoutResidentsInputObjectSchema } from './BuildingUpdateWithoutResidentsInput.schema';
import { BuildingUncheckedUpdateWithoutResidentsInputObjectSchema } from './BuildingUncheckedUpdateWithoutResidentsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateWithWhereUniqueWithoutResidentsInput> =
  z
    .object({
      where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BuildingUpdateWithoutResidentsInputObjectSchema),
        z.lazy(() => BuildingUncheckedUpdateWithoutResidentsInputObjectSchema),
      ]),
    })
    .strict();

export const BuildingUpdateWithWhereUniqueWithoutResidentsInputObjectSchema =
  Schema;
