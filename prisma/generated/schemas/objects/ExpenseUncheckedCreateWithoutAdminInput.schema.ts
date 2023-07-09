import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateWithoutAdminInput> = z
  .object({
    id: z.number().optional(),
    beneficiary: z.string(),
    amount: z.number(),
    explanation: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ExpenseUncheckedCreateWithoutAdminInputObjectSchema = Schema;
