import { z } from 'zod';
import { HouseWhereInputObjectSchema } from './HouseWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseRelationFilter> = z
  .object({
    is: z
      .lazy(() => HouseWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => HouseWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const HouseRelationFilterObjectSchema = Schema;
