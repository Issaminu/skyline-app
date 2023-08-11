import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ContributionCountOrderByAggregateInputObjectSchema } from './ContributionCountOrderByAggregateInput.schema';
import { ContributionAvgOrderByAggregateInputObjectSchema } from './ContributionAvgOrderByAggregateInput.schema';
import { ContributionMaxOrderByAggregateInputObjectSchema } from './ContributionMaxOrderByAggregateInput.schema';
import { ContributionMinOrderByAggregateInputObjectSchema } from './ContributionMinOrderByAggregateInput.schema';
import { ContributionSumOrderByAggregateInputObjectSchema } from './ContributionSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    contributorId: z.lazy(() => SortOrderSchema).optional(),
    houseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ContributionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ContributionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ContributionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ContributionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ContributionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ContributionOrderByWithAggregationInputObjectSchema = Schema;
