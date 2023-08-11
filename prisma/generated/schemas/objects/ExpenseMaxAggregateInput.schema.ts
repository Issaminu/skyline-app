import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    beneficiary: z.literal(true).optional(),
    adminId: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    explanation: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const ExpenseMaxAggregateInputObjectSchema = Schema;
