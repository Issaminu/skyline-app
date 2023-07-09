import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    city: z.literal(true).optional(),
    address: z.literal(true).optional(),
    surface: z.literal(true).optional(),
    thumbnail: z.literal(true).optional(),
    creatorId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const BuildingMinAggregateInputObjectSchema = Schema;
