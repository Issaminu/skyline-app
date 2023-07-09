import { z } from 'zod';
import { InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';
import { InvitationUpdateManyMutationInputObjectSchema } from './InvitationUpdateManyMutationInput.schema';
import { InvitationUncheckedUpdateManyWithoutInvitationsReceivedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInvitationsReceivedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => InvitationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InvitationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            InvitationUncheckedUpdateManyWithoutInvitationsReceivedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvitationUpdateManyWithWhereWithoutReceiverInputObjectSchema =
  Schema;
