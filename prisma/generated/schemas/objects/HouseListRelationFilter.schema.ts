import { z } from 'zod';
import { HouseWhereInputObjectSchema } from './HouseWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseListRelationFilter> = z
  .object({
    every: z.lazy(() => HouseWhereInputObjectSchema).optional(),
    some: z.lazy(() => HouseWhereInputObjectSchema).optional(),
    none: z.lazy(() => HouseWhereInputObjectSchema).optional(),
  })
  .strict();

export const HouseListRelationFilterObjectSchema = Schema;
