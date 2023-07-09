import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutHouseInputObjectSchema } from './InvitationUpdateWithoutHouseInput.schema';
import { InvitationUncheckedUpdateWithoutHouseInputObjectSchema } from './InvitationUncheckedUpdateWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutHouseInput> =
  z
    .object({
      where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvitationUpdateWithoutHouseInputObjectSchema),
        z.lazy(() => InvitationUncheckedUpdateWithoutHouseInputObjectSchema),
      ]),
    })
    .strict();

export const InvitationUpdateWithWhereUniqueWithoutHouseInputObjectSchema =
  Schema;
