import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BuildingCountOrderByAggregateInputObjectSchema } from './BuildingCountOrderByAggregateInput.schema';
import { BuildingAvgOrderByAggregateInputObjectSchema } from './BuildingAvgOrderByAggregateInput.schema';
import { BuildingMaxOrderByAggregateInputObjectSchema } from './BuildingMaxOrderByAggregateInput.schema';
import { BuildingMinOrderByAggregateInputObjectSchema } from './BuildingMinOrderByAggregateInput.schema';
import { BuildingSumOrderByAggregateInputObjectSchema } from './BuildingSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    surface: z.lazy(() => SortOrderSchema).optional(),
    thumbnail: z.lazy(() => SortOrderSchema).optional(),
    creatorId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BuildingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => BuildingAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => BuildingMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BuildingMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => BuildingSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BuildingOrderByWithAggregationInputObjectSchema = Schema;
