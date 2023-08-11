import { z } from 'zod';
import { ExpenseScalarWhereInputObjectSchema } from './ExpenseScalarWhereInput.schema';
import { ExpenseUpdateManyMutationInputObjectSchema } from './ExpenseUpdateManyMutationInput.schema';
import { ExpenseUncheckedUpdateManyWithoutExpensesInputObjectSchema } from './ExpenseUncheckedUpdateManyWithoutExpensesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateManyWithWhereWithoutAdminInput> = z
  .object({
    where: z.lazy(() => ExpenseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ExpenseUpdateManyMutationInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateManyWithoutExpensesInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpdateManyWithWhereWithoutAdminInputObjectSchema = Schema;
