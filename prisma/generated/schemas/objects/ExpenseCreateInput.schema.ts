import { z } from 'zod';
import { UserCreateNestedOneWithoutExpensesInputObjectSchema } from './UserCreateNestedOneWithoutExpensesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateInput> = z
  .object({
    beneficiary: z.string(),
    amount: z.number(),
    explanation: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    admin: z.lazy(() => UserCreateNestedOneWithoutExpensesInputObjectSchema),
  })
  .strict();

export const ExpenseCreateInputObjectSchema = Schema;
