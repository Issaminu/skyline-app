import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingCreateWithoutHousesInputObjectSchema } from './BuildingCreateWithoutHousesInput.schema';
import { BuildingUncheckedCreateWithoutHousesInputObjectSchema } from './BuildingUncheckedCreateWithoutHousesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutHousesInput> = z
  .object({
    where: z.lazy(() => BuildingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BuildingCreateWithoutHousesInputObjectSchema),
      z.lazy(() => BuildingUncheckedCreateWithoutHousesInputObjectSchema),
    ]),
  })
  .strict();

export const BuildingCreateOrConnectWithoutHousesInputObjectSchema = Schema;
