import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutHouseInputObjectSchema } from './InvitationUpdateWithoutHouseInput.schema';
import { InvitationUncheckedUpdateWithoutHouseInputObjectSchema } from './InvitationUncheckedUpdateWithoutHouseInput.schema';
import { InvitationCreateWithoutHouseInputObjectSchema } from './InvitationCreateWithoutHouseInput.schema';
import { InvitationUncheckedCreateWithoutHouseInputObjectSchema } from './InvitationUncheckedCreateWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutHouseInput> =
  z
    .object({
      where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvitationUpdateWithoutHouseInputObjectSchema),
        z.lazy(() => InvitationUncheckedUpdateWithoutHouseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InvitationCreateWithoutHouseInputObjectSchema),
        z.lazy(() => InvitationUncheckedCreateWithoutHouseInputObjectSchema),
      ]),
    })
    .strict();

export const InvitationUpsertWithWhereUniqueWithoutHouseInputObjectSchema =
  Schema;
