import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutSenderInputObjectSchema } from './InvitationUpdateWithoutSenderInput.schema';
import { InvitationUncheckedUpdateWithoutSenderInputObjectSchema } from './InvitationUncheckedUpdateWithoutSenderInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutSenderInput> =
  z
    .object({
      where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvitationUpdateWithoutSenderInputObjectSchema),
        z.lazy(() => InvitationUncheckedUpdateWithoutSenderInputObjectSchema),
      ]),
    })
    .strict();

export const InvitationUpdateWithWhereUniqueWithoutSenderInputObjectSchema =
  Schema;
