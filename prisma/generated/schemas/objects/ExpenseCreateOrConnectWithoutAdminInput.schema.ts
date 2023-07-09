import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseCreateWithoutAdminInputObjectSchema } from './ExpenseCreateWithoutAdminInput.schema';
import { ExpenseUncheckedCreateWithoutAdminInputObjectSchema } from './ExpenseUncheckedCreateWithoutAdminInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateOrConnectWithoutAdminInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutAdminInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutAdminInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseCreateOrConnectWithoutAdminInputObjectSchema = Schema;
