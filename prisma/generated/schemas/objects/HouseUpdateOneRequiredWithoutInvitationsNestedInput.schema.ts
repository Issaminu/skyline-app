import { z } from 'zod';
import { HouseCreateWithoutInvitationsInputObjectSchema } from './HouseCreateWithoutInvitationsInput.schema';
import { HouseUncheckedCreateWithoutInvitationsInputObjectSchema } from './HouseUncheckedCreateWithoutInvitationsInput.schema';
import { HouseCreateOrConnectWithoutInvitationsInputObjectSchema } from './HouseCreateOrConnectWithoutInvitationsInput.schema';
import { HouseUpsertWithoutInvitationsInputObjectSchema } from './HouseUpsertWithoutInvitationsInput.schema';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseUpdateWithoutInvitationsInputObjectSchema } from './HouseUpdateWithoutInvitationsInput.schema';
import { HouseUncheckedUpdateWithoutInvitationsInputObjectSchema } from './HouseUncheckedUpdateWithoutInvitationsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpdateOneRequiredWithoutInvitationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HouseCreateWithoutInvitationsInputObjectSchema),
          z.lazy(() => HouseUncheckedCreateWithoutInvitationsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => HouseCreateOrConnectWithoutInvitationsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => HouseUpsertWithoutInvitationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => HouseWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => HouseUpdateWithoutInvitationsInputObjectSchema),
          z.lazy(() => HouseUncheckedUpdateWithoutInvitationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const HouseUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema =
  Schema;
