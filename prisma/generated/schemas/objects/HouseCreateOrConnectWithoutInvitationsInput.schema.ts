import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseCreateWithoutInvitationsInputObjectSchema } from './HouseCreateWithoutInvitationsInput.schema';
import { HouseUncheckedCreateWithoutInvitationsInputObjectSchema } from './HouseUncheckedCreateWithoutInvitationsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateOrConnectWithoutInvitationsInput> = z
  .object({
    where: z.lazy(() => HouseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => HouseCreateWithoutInvitationsInputObjectSchema),
      z.lazy(() => HouseUncheckedCreateWithoutInvitationsInputObjectSchema),
    ]),
  })
  .strict();

export const HouseCreateOrConnectWithoutInvitationsInputObjectSchema = Schema;
