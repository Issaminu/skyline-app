import { z } from 'zod';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { NestedEnumHouseStatusFilterObjectSchema } from './NestedEnumHouseStatusFilter.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EnumHouseStatusFilter> = z
  .object({
    equals: z.lazy(() => HouseStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => HouseStatusSchema).array(),
        z.lazy(() => HouseStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => HouseStatusSchema).array(),
        z.lazy(() => HouseStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => HouseStatusSchema),
        z.lazy(() => NestedEnumHouseStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumHouseStatusFilterObjectSchema = Schema;
