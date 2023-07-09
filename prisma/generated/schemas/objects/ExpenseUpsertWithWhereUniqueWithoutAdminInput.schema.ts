import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutAdminInputObjectSchema } from './ExpenseUpdateWithoutAdminInput.schema';
import { ExpenseUncheckedUpdateWithoutAdminInputObjectSchema } from './ExpenseUncheckedUpdateWithoutAdminInput.schema';
import { ExpenseCreateWithoutAdminInputObjectSchema } from './ExpenseCreateWithoutAdminInput.schema';
import { ExpenseUncheckedCreateWithoutAdminInputObjectSchema } from './ExpenseUncheckedCreateWithoutAdminInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpsertWithWhereUniqueWithoutAdminInput> =
  z
    .object({
      where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExpenseUpdateWithoutAdminInputObjectSchema),
        z.lazy(() => ExpenseUncheckedUpdateWithoutAdminInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExpenseCreateWithoutAdminInputObjectSchema),
        z.lazy(() => ExpenseUncheckedCreateWithoutAdminInputObjectSchema),
      ]),
    })
    .strict();

export const ExpenseUpsertWithWhereUniqueWithoutAdminInputObjectSchema = Schema;
