import { z } from 'zod';
import { ExpenseCreateManyAdminInputObjectSchema } from './ExpenseCreateManyAdminInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateManyAdminInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ExpenseCreateManyAdminInputObjectSchema),
      z.lazy(() => ExpenseCreateManyAdminInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExpenseCreateManyAdminInputEnvelopeObjectSchema = Schema;
