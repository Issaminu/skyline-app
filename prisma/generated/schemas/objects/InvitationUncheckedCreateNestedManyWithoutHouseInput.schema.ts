import { z } from 'zod';
import { InvitationCreateWithoutHouseInputObjectSchema } from './InvitationCreateWithoutHouseInput.schema';
import { InvitationUncheckedCreateWithoutHouseInputObjectSchema } from './InvitationUncheckedCreateWithoutHouseInput.schema';
import { InvitationCreateOrConnectWithoutHouseInputObjectSchema } from './InvitationCreateOrConnectWithoutHouseInput.schema';
import { InvitationCreateManyHouseInputEnvelopeObjectSchema } from './InvitationCreateManyHouseInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutHouseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvitationCreateWithoutHouseInputObjectSchema),
          z.lazy(() => InvitationCreateWithoutHouseInputObjectSchema).array(),
          z.lazy(() => InvitationUncheckedCreateWithoutHouseInputObjectSchema),
          z
            .lazy(() => InvitationUncheckedCreateWithoutHouseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvitationCreateOrConnectWithoutHouseInputObjectSchema),
          z
            .lazy(() => InvitationCreateOrConnectWithoutHouseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvitationCreateManyHouseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvitationWhereUniqueInputObjectSchema),
          z.lazy(() => InvitationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvitationUncheckedCreateNestedManyWithoutHouseInputObjectSchema =
  Schema;
