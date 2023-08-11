import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingCreateWithoutResidentsInputObjectSchema } from './BuildingCreateWithoutResidentsInput.schema';
import { BuildingUncheckedCreateWithoutResidentsInputObjectSchema } from './BuildingUncheckedCreateWithoutResidentsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutResidentsInput> = z
  .object({
    where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BuildingCreateWithoutResidentsInputObjectSchema),
      z.lazy(() => BuildingUncheckedCreateWithoutResidentsInputObjectSchema),
    ]),
  })
  .strict();

export const BuildingCreateOrConnectWithoutResidentsInputObjectSchema = Schema;
