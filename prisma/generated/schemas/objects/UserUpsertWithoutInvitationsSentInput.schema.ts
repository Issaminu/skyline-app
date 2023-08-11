import { z } from 'zod';
import { UserUpdateWithoutInvitationsSentInputObjectSchema } from './UserUpdateWithoutInvitationsSentInput.schema';
import { UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsSentInput.schema';
import { UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutInvitationsSentInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutInvitationsSentInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutInvitationsSentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutInvitationsSentInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutInvitationsSentInputObjectSchema = Schema;
