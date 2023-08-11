import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutReceiverInputObjectSchema } from './InvitationCreateWithoutReceiverInput.schema';
import { InvitationUncheckedCreateWithoutReceiverInputObjectSchema } from './InvitationUncheckedCreateWithoutReceiverInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InvitationCreateWithoutReceiverInputObjectSchema),
        z.lazy(() => InvitationUncheckedCreateWithoutReceiverInputObjectSchema),
      ]),
    })
    .strict();

export const InvitationCreateOrConnectWithoutReceiverInputObjectSchema = Schema;
