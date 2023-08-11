import { z } from 'zod';
import { ContributionWhereInputObjectSchema } from './ContributionWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionListRelationFilter> = z
  .object({
    every: z.lazy(() => ContributionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ContributionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ContributionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ContributionListRelationFilterObjectSchema = Schema;
