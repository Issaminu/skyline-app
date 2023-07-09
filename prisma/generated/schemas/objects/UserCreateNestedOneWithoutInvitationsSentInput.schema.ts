import { z } from 'zod';
import { UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema';
import { UserCreateOrConnectWithoutInvitationsSentInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsSentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvitationsSentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutInvitationsSentInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutInvitationsSentInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutInvitationsSentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutInvitationsSentInputObjectSchema =
  Schema;
