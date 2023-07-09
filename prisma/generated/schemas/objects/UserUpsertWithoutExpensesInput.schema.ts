import { z } from 'zod';
import { UserUpdateWithoutExpensesInputObjectSchema } from './UserUpdateWithoutExpensesInput.schema';
import { UserUncheckedUpdateWithoutExpensesInputObjectSchema } from './UserUncheckedUpdateWithoutExpensesInput.schema';
import { UserCreateWithoutExpensesInputObjectSchema } from './UserCreateWithoutExpensesInput.schema';
import { UserUncheckedCreateWithoutExpensesInputObjectSchema } from './UserUncheckedCreateWithoutExpensesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutExpensesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutExpensesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutExpensesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutExpensesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutExpensesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutExpensesInputObjectSchema = Schema;
