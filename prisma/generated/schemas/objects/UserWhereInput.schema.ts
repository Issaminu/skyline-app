import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BuildingListRelationFilterObjectSchema } from './BuildingListRelationFilter.schema';
import { ContributionListRelationFilterObjectSchema } from './ContributionListRelationFilter.schema';
import { ExpenseListRelationFilterObjectSchema } from './ExpenseListRelationFilter.schema';
import { InvitationListRelationFilterObjectSchema } from './InvitationListRelationFilter.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isEmailVerified: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    residentOfBuildings: z
      .lazy(() => BuildingListRelationFilterObjectSchema)
      .optional(),
    adminOfBuildings: z
      .lazy(() => BuildingListRelationFilterObjectSchema)
      .optional(),
    creatorOfBuildings: z
      .lazy(() => BuildingListRelationFilterObjectSchema)
      .optional(),
    Contributions: z
      .lazy(() => ContributionListRelationFilterObjectSchema)
      .optional(),
    Expenses: z.lazy(() => ExpenseListRelationFilterObjectSchema).optional(),
    InvitationsSent: z
      .lazy(() => InvitationListRelationFilterObjectSchema)
      .optional(),
    InvitationsReceived: z
      .lazy(() => InvitationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
