import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    surface: z.literal(true).optional(),
    creatorId: z.literal(true).optional(),
  })
  .strict();

export const BuildingSumAggregateInputObjectSchema = Schema;
