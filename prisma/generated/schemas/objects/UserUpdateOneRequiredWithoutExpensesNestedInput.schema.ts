import { z } from 'zod';
import { UserCreateWithoutExpensesInputObjectSchema } from './UserCreateWithoutExpensesInput.schema';
import { UserUncheckedCreateWithoutExpensesInputObjectSchema } from './UserUncheckedCreateWithoutExpensesInput.schema';
import { UserCreateOrConnectWithoutExpensesInputObjectSchema } from './UserCreateOrConnectWithoutExpensesInput.schema';
import { UserUpsertWithoutExpensesInputObjectSchema } from './UserUpsertWithoutExpensesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutExpensesInputObjectSchema } from './UserUpdateWithoutExpensesInput.schema';
import { UserUncheckedUpdateWithoutExpensesInputObjectSchema } from './UserUncheckedUpdateWithoutExpensesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutExpensesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutExpensesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutExpensesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutExpensesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutExpensesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutExpensesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutExpensesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutExpensesNestedInputObjectSchema =
  Schema;
