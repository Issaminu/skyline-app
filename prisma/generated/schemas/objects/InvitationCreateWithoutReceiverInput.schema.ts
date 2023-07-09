import { z } from 'zod';
import { UserCreateNestedOneWithoutInvitationsSentInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsSentInput.schema';
import { HouseCreateNestedOneWithoutInvitationsInputObjectSchema } from './HouseCreateNestedOneWithoutInvitationsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateWithoutReceiverInput> = z
  .object({
    status: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sender: z.lazy(
      () => UserCreateNestedOneWithoutInvitationsSentInputObjectSchema,
    ),
    house: z.lazy(
      () => HouseCreateNestedOneWithoutInvitationsInputObjectSchema,
    ),
  })
  .strict();

export const InvitationCreateWithoutReceiverInputObjectSchema = Schema;
