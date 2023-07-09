import { z } from 'zod';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema';
import { UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsReceivedInput.schema';
import { UserUpsertWithoutInvitationsReceivedInputObjectSchema } from './UserUpsertWithoutInvitationsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUpdateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsReceivedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvitationsReceivedNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutInvitationsReceivedInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutInvitationsReceivedInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutInvitationsReceivedInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectSchema =
  Schema;
