import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutSenderInputObjectSchema } from './InvitationCreateWithoutSenderInput.schema';
import { InvitationUncheckedCreateWithoutSenderInputObjectSchema } from './InvitationUncheckedCreateWithoutSenderInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutSenderInput> = z
  .object({
    where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvitationCreateWithoutSenderInputObjectSchema),
      z.lazy(() => InvitationUncheckedCreateWithoutSenderInputObjectSchema),
    ]),
  })
  .strict();

export const InvitationCreateOrConnectWithoutSenderInputObjectSchema = Schema;
