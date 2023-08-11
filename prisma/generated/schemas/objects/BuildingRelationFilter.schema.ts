import { z } from 'zod';
import { BuildingWhereInputObjectSchema } from './BuildingWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingRelationFilter> = z
  .object({
    is: z
      .lazy(() => BuildingWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BuildingWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BuildingRelationFilterObjectSchema = Schema;
