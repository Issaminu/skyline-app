import { z } from 'zod';
import { HouseCreateWithoutInvitationsInputObjectSchema } from './HouseCreateWithoutInvitationsInput.schema';
import { HouseUncheckedCreateWithoutInvitationsInputObjectSchema } from './HouseUncheckedCreateWithoutInvitationsInput.schema';
import { HouseCreateOrConnectWithoutInvitationsInputObjectSchema } from './HouseCreateOrConnectWithoutInvitationsInput.schema';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateNestedOneWithoutInvitationsInput> = z
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
    connect: z.lazy(() => HouseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const HouseCreateNestedOneWithoutInvitationsInputObjectSchema = Schema;
