import { z } from 'zod';
import { ContributionCreateManyContributorInputObjectSchema } from './ContributionCreateManyContributorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateManyContributorInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ContributionCreateManyContributorInputObjectSchema),
        z
          .lazy(() => ContributionCreateManyContributorInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContributionCreateManyContributorInputEnvelopeObjectSchema =
  Schema;
