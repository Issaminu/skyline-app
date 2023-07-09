import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUncheckedCreateWithoutHouseInput> = z
  .object({
    id: z.number().optional(),
    amount: z.number(),
    contributorId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ContributionUncheckedCreateWithoutHouseInputObjectSchema = Schema;
