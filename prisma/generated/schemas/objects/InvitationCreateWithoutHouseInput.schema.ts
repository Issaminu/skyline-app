import { z } from 'zod';
import { UserCreateNestedOneWithoutInvitationsSentInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsSentInput.schema';
import { UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsReceivedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateWithoutHouseInput> = z
  .object({
    status: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sender: z.lazy(
      () => UserCreateNestedOneWithoutInvitationsSentInputObjectSchema,
    ),
    receiver: z.lazy(
      () => UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema,
    ),
  })
  .strict();

export const InvitationCreateWithoutHouseInputObjectSchema = Schema;
