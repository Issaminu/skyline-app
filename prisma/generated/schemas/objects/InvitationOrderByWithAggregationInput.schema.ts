import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvitationCountOrderByAggregateInputObjectSchema } from './InvitationCountOrderByAggregateInput.schema';
import { InvitationAvgOrderByAggregateInputObjectSchema } from './InvitationAvgOrderByAggregateInput.schema';
import { InvitationMaxOrderByAggregateInputObjectSchema } from './InvitationMaxOrderByAggregateInput.schema';
import { InvitationMinOrderByAggregateInputObjectSchema } from './InvitationMinOrderByAggregateInput.schema';
import { InvitationSumOrderByAggregateInputObjectSchema } from './InvitationSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    senderId: z.lazy(() => SortOrderSchema).optional(),
    receiverId: z.lazy(() => SortOrderSchema).optional(),
    houseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InvitationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => InvitationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => InvitationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => InvitationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => InvitationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvitationOrderByWithAggregationInputObjectSchema = Schema;
