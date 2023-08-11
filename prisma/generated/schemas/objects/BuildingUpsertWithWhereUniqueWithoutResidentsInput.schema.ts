import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithoutResidentsInputObjectSchema } from './BuildingUpdateWithoutResidentsInput.schema';
import { BuildingUncheckedUpdateWithoutResidentsInputObjectSchema } from './BuildingUncheckedUpdateWithoutResidentsInput.schema';
import { BuildingCreateWithoutResidentsInputObjectSchema } from './BuildingCreateWithoutResidentsInput.schema';
import { BuildingUncheckedCreateWithoutResidentsInputObjectSchema } from './BuildingUncheckedCreateWithoutResidentsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpsertWithWhereUniqueWithoutResidentsInput> =
  z
    .object({
      where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BuildingUpdateWithoutResidentsInputObjectSchema),
        z.lazy(() => BuildingUncheckedUpdateWithoutResidentsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BuildingCreateWithoutResidentsInputObjectSchema),
        z.lazy(() => BuildingUncheckedCreateWithoutResidentsInputObjectSchema),
      ]),
    })
    .strict();

export const BuildingUpsertWithWhereUniqueWithoutResidentsInputObjectSchema =
  Schema;
