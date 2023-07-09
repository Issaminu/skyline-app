import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    senderId: z.lazy(() => SortOrderSchema).optional(),
    receiverId: z.lazy(() => SortOrderSchema).optional(),
    houseId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InvitationAvgOrderByAggregateInputObjectSchema = Schema;
