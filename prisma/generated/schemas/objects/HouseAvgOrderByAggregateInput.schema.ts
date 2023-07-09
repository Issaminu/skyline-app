import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    buildingId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const HouseAvgOrderByAggregateInputObjectSchema = Schema;
