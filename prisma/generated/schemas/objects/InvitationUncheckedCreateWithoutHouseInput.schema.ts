import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUncheckedCreateWithoutHouseInput> = z
  .object({
    id: z.number().optional(),
    status: z.string(),
    senderId: z.number(),
    receiverId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const InvitationUncheckedCreateWithoutHouseInputObjectSchema = Schema;
