import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvitationsSentInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutInvitationsSentInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutInvitationsSentInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutInvitationsSentInputObjectSchema =
  Schema;
