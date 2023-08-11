import { z } from 'zod';
import { HouseUpdateWithoutInvitationsInputObjectSchema } from './HouseUpdateWithoutInvitationsInput.schema';
import { HouseUncheckedUpdateWithoutInvitationsInputObjectSchema } from './HouseUncheckedUpdateWithoutInvitationsInput.schema';
import { HouseCreateWithoutInvitationsInputObjectSchema } from './HouseCreateWithoutInvitationsInput.schema';
import { HouseUncheckedCreateWithoutInvitationsInputObjectSchema } from './HouseUncheckedCreateWithoutInvitationsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpsertWithoutInvitationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => HouseUpdateWithoutInvitationsInputObjectSchema),
      z.lazy(() => HouseUncheckedUpdateWithoutInvitationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => HouseCreateWithoutInvitationsInputObjectSchema),
      z.lazy(() => HouseUncheckedCreateWithoutInvitationsInputObjectSchema),
    ]),
  })
  .strict();

export const HouseUpsertWithoutInvitationsInputObjectSchema = Schema;
