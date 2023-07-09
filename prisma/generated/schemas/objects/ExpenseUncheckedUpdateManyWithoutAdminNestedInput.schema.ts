import { z } from 'zod';
import { ExpenseCreateWithoutAdminInputObjectSchema } from './ExpenseCreateWithoutAdminInput.schema';
import { ExpenseUncheckedCreateWithoutAdminInputObjectSchema } from './ExpenseUncheckedCreateWithoutAdminInput.schema';
import { ExpenseCreateOrConnectWithoutAdminInputObjectSchema } from './ExpenseCreateOrConnectWithoutAdminInput.schema';
import { ExpenseUpsertWithWhereUniqueWithoutAdminInputObjectSchema } from './ExpenseUpsertWithWhereUniqueWithoutAdminInput.schema';
import { ExpenseCreateManyAdminInputEnvelopeObjectSchema } from './ExpenseCreateManyAdminInputEnvelope.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithWhereUniqueWithoutAdminInputObjectSchema } from './ExpenseUpdateWithWhereUniqueWithoutAdminInput.schema';
import { ExpenseUpdateManyWithWhereWithoutAdminInputObjectSchema } from './ExpenseUpdateManyWithWhereWithoutAdminInput.schema';
import { ExpenseScalarWhereInputObjectSchema } from './ExpenseScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedUpdateManyWithoutAdminNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => ExpenseUpsertWithWhereUniqueWithoutAdminInputObjectSchema,
          ),
          z
            .lazy(
              () => ExpenseUpsertWithWhereUniqueWithoutAdminInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExpenseCreateManyAdminInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ExpenseUpdateWithWhereUniqueWithoutAdminInputObjectSchema,
          ),
          z
            .lazy(
              () => ExpenseUpdateWithWhereUniqueWithoutAdminInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ExpenseUpdateManyWithWhereWithoutAdminInputObjectSchema),
          z
            .lazy(() => ExpenseUpdateManyWithWhereWithoutAdminInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ExpenseScalarWhereInputObjectSchema),
          z.lazy(() => ExpenseScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExpenseUncheckedUpdateManyWithoutAdminNestedInputObjectSchema =
  Schema;
