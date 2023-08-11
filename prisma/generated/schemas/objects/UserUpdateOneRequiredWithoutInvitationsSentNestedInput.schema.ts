import { z } from 'zod';
import { UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema';
import { UserCreateOrConnectWithoutInvitationsSentInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsSentInput.schema';
import { UserUpsertWithoutInvitationsSentInputObjectSchema } from './UserUpsertWithoutInvitationsSentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutInvitationsSentInputObjectSchema } from './UserUpdateWithoutInvitationsSentInput.schema';
import { UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsSentInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvitationsSentNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutInvitationsSentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutInvitationsSentInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema =
  Schema;
