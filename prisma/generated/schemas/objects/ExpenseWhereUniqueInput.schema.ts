import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const ExpenseWhereUniqueInputObjectSchema = Schema;
