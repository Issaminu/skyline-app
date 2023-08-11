import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutReceiverInputObjectSchema } from './InvitationUpdateWithoutReceiverInput.schema';
import { InvitationUncheckedUpdateWithoutReceiverInputObjectSchema } from './InvitationUncheckedUpdateWithoutReceiverInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvitationUpdateWithoutReceiverInputObjectSchema),
        z.lazy(() => InvitationUncheckedUpdateWithoutReceiverInputObjectSchema),
      ]),
    })
    .strict();

export const InvitationUpdateWithWhereUniqueWithoutReceiverInputObjectSchema =
  Schema;
