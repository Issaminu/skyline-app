import { z } from 'zod';
import { BuildingWhereInputObjectSchema } from './BuildingWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingListRelationFilter> = z
  .object({
    every: z.lazy(() => BuildingWhereInputObjectSchema).optional(),
    some: z.lazy(() => BuildingWhereInputObjectSchema).optional(),
    none: z.lazy(() => BuildingWhereInputObjectSchema).optional(),
  })
  .strict();

export const BuildingListRelationFilterObjectSchema = Schema;
