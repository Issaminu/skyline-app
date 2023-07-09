import { z } from 'zod';
import { UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsReceivedInput.schema';
import { HouseCreateNestedOneWithoutInvitationsInputObjectSchema } from './HouseCreateNestedOneWithoutInvitationsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateWithoutSenderInput> = z
  .object({
    status: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    receiver: z.lazy(
      () => UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema,
    ),
    house: z.lazy(
      () => HouseCreateNestedOneWithoutInvitationsInputObjectSchema,
    ),
  })
  .strict();

export const InvitationCreateWithoutSenderInputObjectSchema = Schema;
