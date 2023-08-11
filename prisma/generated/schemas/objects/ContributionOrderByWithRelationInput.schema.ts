import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { HouseOrderByWithRelationInputObjectSchema } from './HouseOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    contributorId: z.lazy(() => SortOrderSchema).optional(),
    houseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    contributor: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    house: z.lazy(() => HouseOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ContributionOrderByWithRelationInputObjectSchema = Schema;
