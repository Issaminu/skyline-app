import { z } from 'zod';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema';
import { UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvitationsReceivedInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema =
  Schema;
