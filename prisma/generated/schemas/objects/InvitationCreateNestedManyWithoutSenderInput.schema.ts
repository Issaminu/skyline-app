import { z } from 'zod';
import { InvitationCreateWithoutSenderInputObjectSchema } from './InvitationCreateWithoutSenderInput.schema';
import { InvitationUncheckedCreateWithoutSenderInputObjectSchema } from './InvitationUncheckedCreateWithoutSenderInput.schema';
import { InvitationCreateOrConnectWithoutSenderInputObjectSchema } from './InvitationCreateOrConnectWithoutSenderInput.schema';
import { InvitationCreateManySenderInputEnvelopeObjectSchema } from './InvitationCreateManySenderInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateNestedManyWithoutSenderInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InvitationCreateWithoutSenderInputObjectSchema),
        z.lazy(() => InvitationCreateWithoutSenderInputObjectSchema).array(),
        z.lazy(() => InvitationUncheckedCreateWithoutSenderInputObjectSchema),
        z
          .lazy(() => InvitationUncheckedCreateWithoutSenderInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InvitationCreateOrConnectWithoutSenderInputObjectSchema),
        z
          .lazy(() => InvitationCreateOrConnectWithoutSenderInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => InvitationCreateManySenderInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => InvitationWhereUniqueInputObjectSchema),
        z.lazy(() => InvitationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InvitationCreateNestedManyWithoutSenderInputObjectSchema = Schema;
