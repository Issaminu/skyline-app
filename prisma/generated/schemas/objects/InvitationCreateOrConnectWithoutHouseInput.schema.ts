import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutHouseInputObjectSchema } from './InvitationCreateWithoutHouseInput.schema';
import { InvitationUncheckedCreateWithoutHouseInputObjectSchema } from './InvitationUncheckedCreateWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutHouseInput> = z
  .object({
    where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvitationCreateWithoutHouseInputObjectSchema),
      z.lazy(() => InvitationUncheckedCreateWithoutHouseInputObjectSchema),
    ]),
  })
  .strict();

export const InvitationCreateOrConnectWithoutHouseInputObjectSchema = Schema;
