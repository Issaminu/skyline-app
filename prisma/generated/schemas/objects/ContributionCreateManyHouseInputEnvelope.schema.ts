import { z } from 'zod';
import { ContributionCreateManyHouseInputObjectSchema } from './ContributionCreateManyHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateManyHouseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ContributionCreateManyHouseInputObjectSchema),
      z.lazy(() => ContributionCreateManyHouseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ContributionCreateManyHouseInputEnvelopeObjectSchema = Schema;
