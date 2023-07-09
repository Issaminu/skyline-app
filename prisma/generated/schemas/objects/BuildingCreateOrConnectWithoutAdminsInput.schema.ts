import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingCreateWithoutAdminsInputObjectSchema } from './BuildingCreateWithoutAdminsInput.schema';
import { BuildingUncheckedCreateWithoutAdminsInputObjectSchema } from './BuildingUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutAdminsInput> = z
  .object({
    where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BuildingCreateWithoutAdminsInputObjectSchema),
      z.lazy(() => BuildingUncheckedCreateWithoutAdminsInputObjectSchema),
    ]),
  })
  .strict();

export const BuildingCreateOrConnectWithoutAdminsInputObjectSchema = Schema;
