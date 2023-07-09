import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { HouseListRelationFilterObjectSchema } from './HouseListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BuildingWhereInputObjectSchema),
        z.lazy(() => BuildingWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BuildingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BuildingWhereInputObjectSchema),
        z.lazy(() => BuildingWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    city: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    surface: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    thumbnail: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    creatorId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    houses: z.lazy(() => HouseListRelationFilterObjectSchema).optional(),
    residents: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    admins: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    creator: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BuildingWhereInputObjectSchema = Schema;
