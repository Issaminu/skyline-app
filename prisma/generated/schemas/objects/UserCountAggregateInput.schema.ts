import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    password: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    image: z.literal(true).optional(),
    isEmailVerified: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;
