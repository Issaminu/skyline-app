import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HouseOrderByRelationAggregateInputObjectSchema } from './HouseOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingOrderByWithRelationInput> = z
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
    houses: z
      .lazy(() => HouseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    residents: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    admins: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    creator: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const BuildingOrderByWithRelationInputObjectSchema = Schema;
