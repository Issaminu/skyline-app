import { z } from 'zod';
import { ExpenseCreateWithoutAdminInputObjectSchema } from './ExpenseCreateWithoutAdminInput.schema';
import { ExpenseUncheckedCreateWithoutAdminInputObjectSchema } from './ExpenseUncheckedCreateWithoutAdminInput.schema';
import { ExpenseCreateOrConnectWithoutAdminInputObjectSchema } from './ExpenseCreateOrConnectWithoutAdminInput.schema';
import { ExpenseCreateManyAdminInputEnvelopeObjectSchema } from './ExpenseCreateManyAdminInputEnvelope.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateNestedManyWithoutAdminInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExpenseCreateWithoutAdminInputObjectSchema),
          z.lazy(() => ExpenseCreateWithoutAdminInputObjectSchema).array(),
          z.lazy(() => ExpenseUncheckedCreateWithoutAdminInputObjectSchema),
          z
            .lazy(() => ExpenseUncheckedCreateWithoutAdminInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ExpenseCreateOrConnectWithoutAdminInputObjectSchema),
          z
            .lazy(() => ExpenseCreateOrConnectWithoutAdminInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExpenseCreateManyAdminInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExpenseUncheckedCreateNestedManyWithoutAdminInputObjectSchema =
  Schema;
