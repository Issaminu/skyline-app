import { z } from 'zod';
import { InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';
import { InvitationUpdateManyMutationInputObjectSchema } from './InvitationUpdateManyMutationInput.schema';
import { InvitationUncheckedUpdateManyWithoutInvitationsSentInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInvitationsSentInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutSenderInput> =
  z
    .object({
      where: z.lazy(() => InvitationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InvitationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            InvitationUncheckedUpdateManyWithoutInvitationsSentInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvitationUpdateManyWithWhereWithoutSenderInputObjectSchema =
  Schema;
