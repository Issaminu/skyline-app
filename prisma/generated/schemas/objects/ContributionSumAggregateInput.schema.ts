import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    contributorId: z.literal(true).optional(),
    houseId: z.literal(true).optional(),
  })
  .strict();

export const ContributionSumAggregateInputObjectSchema = Schema;
