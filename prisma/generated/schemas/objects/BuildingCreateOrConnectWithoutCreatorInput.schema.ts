import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingCreateWithoutCreatorInputObjectSchema } from './BuildingCreateWithoutCreatorInput.schema';
import { BuildingUncheckedCreateWithoutCreatorInputObjectSchema } from './BuildingUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BuildingCreateWithoutCreatorInputObjectSchema),
      z.lazy(() => BuildingUncheckedCreateWithoutCreatorInputObjectSchema),
    ]),
  })
  .strict();

export const BuildingCreateOrConnectWithoutCreatorInputObjectSchema = Schema;
