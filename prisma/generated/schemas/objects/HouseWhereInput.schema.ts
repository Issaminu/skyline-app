import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumHouseStatusFilterObjectSchema } from './EnumHouseStatusFilter.schema';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BuildingRelationFilterObjectSchema } from './BuildingRelationFilter.schema';
import { BuildingWhereInputObjectSchema } from './BuildingWhereInput.schema';
import { ContributionListRelationFilterObjectSchema } from './ContributionListRelationFilter.schema';
import { InvitationListRelationFilterObjectSchema } from './InvitationListRelationFilter.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => HouseWhereInputObjectSchema),
        z.lazy(() => HouseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HouseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HouseWhereInputObjectSchema),
        z.lazy(() => HouseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    size: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumHouseStatusFilterObjectSchema),
        z.lazy(() => HouseStatusSchema),
      ])
      .optional(),
    buildingId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    Building: z
      .union([
        z.lazy(() => BuildingRelationFilterObjectSchema),
        z.lazy(() => BuildingWhereInputObjectSchema),
      ])
      .optional(),
    Contributions: z
      .lazy(() => ContributionListRelationFilterObjectSchema)
      .optional(),
    Invitations: z
      .lazy(() => InvitationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const HouseWhereInputObjectSchema = Schema;
