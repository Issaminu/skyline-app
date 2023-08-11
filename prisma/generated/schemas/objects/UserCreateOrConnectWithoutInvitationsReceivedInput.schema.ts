import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvitationsReceivedInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutInvitationsReceivedInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema =
  Schema;
