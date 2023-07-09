import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvitationScalarWhereInputObjectSchema),
        z.lazy(() => InvitationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvitationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvitationScalarWhereInputObjectSchema),
        z.lazy(() => InvitationScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const InvitationScalarWhereInputObjectSchema = Schema;
