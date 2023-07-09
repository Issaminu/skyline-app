import { z } from 'zod';
import { InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';
import { InvitationUpdateManyMutationInputObjectSchema } from './InvitationUpdateManyMutationInput.schema';
import { InvitationUncheckedUpdateManyWithoutInvitationsInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInvitationsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutHouseInput> =
  z
    .object({
      where: z.lazy(() => InvitationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InvitationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            InvitationUncheckedUpdateManyWithoutInvitationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvitationUpdateManyWithWhereWithoutHouseInputObjectSchema =
  Schema;
