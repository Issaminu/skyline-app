import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutAdminInputObjectSchema } from './ExpenseUpdateWithoutAdminInput.schema';
import { ExpenseUncheckedUpdateWithoutAdminInputObjectSchema } from './ExpenseUncheckedUpdateWithoutAdminInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateWithWhereUniqueWithoutAdminInput> =
  z
    .object({
      where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExpenseUpdateWithoutAdminInputObjectSchema),
        z.lazy(() => ExpenseUncheckedUpdateWithoutAdminInputObjectSchema),
      ]),
    })
    .strict();

export const ExpenseUpdateWithWhereUniqueWithoutAdminInputObjectSchema = Schema;
