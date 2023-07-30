import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    contributorId: z.lazy(() => SortOrderSchema).optional(),
    houseId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ContributionAvgOrderByAggregateInputObjectSchema = Schema;