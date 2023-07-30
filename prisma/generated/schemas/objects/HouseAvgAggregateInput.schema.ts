import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    size: z.literal(true).optional(),
    buildingId: z.literal(true).optional(),
  })
  .strict();

export const HouseAvgAggregateInputObjectSchema = Schema;