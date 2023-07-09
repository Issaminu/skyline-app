import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const ContributionWhereUniqueInputObjectSchema = Schema;
