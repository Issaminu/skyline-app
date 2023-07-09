import { z } from 'zod';
import { UserUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUpdateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsReceivedInput.schema';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutInvitationsReceivedInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutInvitationsReceivedInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutInvitationsReceivedInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutInvitationsReceivedInputObjectSchema = Schema;
