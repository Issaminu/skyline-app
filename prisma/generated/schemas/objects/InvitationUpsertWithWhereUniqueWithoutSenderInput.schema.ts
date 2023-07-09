import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutSenderInputObjectSchema } from './InvitationUpdateWithoutSenderInput.schema';
import { InvitationUncheckedUpdateWithoutSenderInputObjectSchema } from './InvitationUncheckedUpdateWithoutSenderInput.schema';
import { InvitationCreateWithoutSenderInputObjectSchema } from './InvitationCreateWithoutSenderInput.schema';
import { InvitationUncheckedCreateWithoutSenderInputObjectSchema } from './InvitationUncheckedCreateWithoutSenderInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutSenderInput> =
  z
    .object({
      where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvitationUpdateWithoutSenderInputObjectSchema),
        z.lazy(() => InvitationUncheckedUpdateWithoutSenderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InvitationCreateWithoutSenderInputObjectSchema),
        z.lazy(() => InvitationUncheckedCreateWithoutSenderInputObjectSchema),
      ]),
    })
    .strict();

export const InvitationUpsertWithWhereUniqueWithoutSenderInputObjectSchema =
  Schema;
