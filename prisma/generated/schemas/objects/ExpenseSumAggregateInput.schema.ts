import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    adminId: z.literal(true).optional(),
    amount: z.literal(true).optional(),
  })
  .strict();

export const ExpenseSumAggregateInputObjectSchema = Schema;