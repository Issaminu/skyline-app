import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutReceiverInputObjectSchema } from './InvitationUpdateWithoutReceiverInput.schema';
import { InvitationUncheckedUpdateWithoutReceiverInputObjectSchema } from './InvitationUncheckedUpdateWithoutReceiverInput.schema';
import { InvitationCreateWithoutReceiverInputObjectSchema } from './InvitationCreateWithoutReceiverInput.schema';
import { InvitationUncheckedCreateWithoutReceiverInputObjectSchema } from './InvitationUncheckedCreateWithoutReceiverInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvitationUpdateWithoutReceiverInputObjectSchema),
        z.lazy(() => InvitationUncheckedUpdateWithoutReceiverInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InvitationCreateWithoutReceiverInputObjectSchema),
        z.lazy(() => InvitationUncheckedCreateWithoutReceiverInputObjectSchema),
      ]),
    })
    .strict();

export const InvitationUpsertWithWhereUniqueWithoutReceiverInputObjectSchema =
  Schema;
