import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { HouseOrderByWithRelationInputObjectSchema } from './HouseOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    senderId: z.lazy(() => SortOrderSchema).optional(),
    receiverId: z.lazy(() => SortOrderSchema).optional(),
    houseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    sender: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    receiver: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    house: z.lazy(() => HouseOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const InvitationOrderByWithRelationInputObjectSchema = Schema;
