import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { HouseRelationFilterObjectSchema } from './HouseRelationFilter.schema';
import { HouseWhereInputObjectSchema } from './HouseWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ContributionWhereInputObjectSchema),
        z.lazy(() => ContributionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ContributionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ContributionWhereInputObjectSchema),
        z.lazy(() => ContributionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    amount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    contributorId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    houseId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    contributor: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    house: z
      .union([
        z.lazy(() => HouseRelationFilterObjectSchema),
        z.lazy(() => HouseWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ContributionWhereInputObjectSchema = Schema;
