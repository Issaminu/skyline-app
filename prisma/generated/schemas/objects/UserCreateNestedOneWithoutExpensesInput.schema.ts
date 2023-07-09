import { z } from 'zod';
import { UserCreateWithoutExpensesInputObjectSchema } from './UserCreateWithoutExpensesInput.schema';
import { UserUncheckedCreateWithoutExpensesInputObjectSchema } from './UserUncheckedCreateWithoutExpensesInput.schema';
import { UserCreateOrConnectWithoutExpensesInputObjectSchema } from './UserCreateOrConnectWithoutExpensesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutExpensesInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutExpensesInputObjectSchema = Schema;
