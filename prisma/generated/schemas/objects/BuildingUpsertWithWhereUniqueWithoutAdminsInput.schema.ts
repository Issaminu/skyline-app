import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithoutAdminsInputObjectSchema } from './BuildingUpdateWithoutAdminsInput.schema';
import { BuildingUncheckedUpdateWithoutAdminsInputObjectSchema } from './BuildingUncheckedUpdateWithoutAdminsInput.schema';
import { BuildingCreateWithoutAdminsInputObjectSchema } from './BuildingCreateWithoutAdminsInput.schema';
import { BuildingUncheckedCreateWithoutAdminsInputObjectSchema } from './BuildingUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpsertWithWhereUniqueWithoutAdminsInput> =
  z
    .object({
      where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BuildingUpdateWithoutAdminsInputObjectSchema),
        z.lazy(() => BuildingUncheckedUpdateWithoutAdminsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BuildingCreateWithoutAdminsInputObjectSchema),
        z.lazy(() => BuildingUncheckedCreateWithoutAdminsInputObjectSchema),
      ]),
    })
    .strict();

export const BuildingUpsertWithWhereUniqueWithoutAdminsInputObjectSchema =
  Schema;
