import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HouseCountOrderByAggregateInputObjectSchema } from './HouseCountOrderByAggregateInput.schema';
import { HouseAvgOrderByAggregateInputObjectSchema } from './HouseAvgOrderByAggregateInput.schema';
import { HouseMaxOrderByAggregateInputObjectSchema } from './HouseMaxOrderByAggregateInput.schema';
import { HouseMinOrderByAggregateInputObjectSchema } from './HouseMinOrderByAggregateInput.schema';
import { HouseSumOrderByAggregateInputObjectSchema } from './HouseSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    buildingId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => HouseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => HouseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => HouseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => HouseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => HouseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const HouseOrderByWithAggregationInputObjectSchema = Schema;
