import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { HouseRelationFilterObjectSchema } from './HouseRelationFilter.schema';
import { HouseWhereInputObjectSchema } from './HouseWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvitationWhereInputObjectSchema),
        z.lazy(() => InvitationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvitationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvitationWhereInputObjectSchema),
        z.lazy(() => InvitationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    senderId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    receiverId: z
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
    sender: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    receiver: z
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

export const InvitationWhereInputObjectSchema = Schema;
