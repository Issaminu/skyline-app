import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    senderId: z.literal(true).optional(),
    receiverId: z.literal(true).optional(),
    houseId: z.literal(true).optional(),
  })
  .strict();

export const InvitationAvgAggregateInputObjectSchema = Schema;
