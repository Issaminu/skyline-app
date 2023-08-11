import { z } from 'zod';
import { InvitationCreateWithoutReceiverInputObjectSchema } from './InvitationCreateWithoutReceiverInput.schema';
import { InvitationUncheckedCreateWithoutReceiverInputObjectSchema } from './InvitationUncheckedCreateWithoutReceiverInput.schema';
import { InvitationCreateOrConnectWithoutReceiverInputObjectSchema } from './InvitationCreateOrConnectWithoutReceiverInput.schema';
import { InvitationCreateManyReceiverInputEnvelopeObjectSchema } from './InvitationCreateManyReceiverInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutReceiverInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvitationCreateWithoutReceiverInputObjectSchema),
          z
            .lazy(() => InvitationCreateWithoutReceiverInputObjectSchema)
            .array(),
          z.lazy(
            () => InvitationUncheckedCreateWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () => InvitationUncheckedCreateWithoutReceiverInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => InvitationCreateOrConnectWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () => InvitationCreateOrConnectWithoutReceiverInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvitationCreateManyReceiverInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvitationWhereUniqueInputObjectSchema),
          z.lazy(() => InvitationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvitationUncheckedCreateNestedManyWithoutReceiverInputObjectSchema =
  Schema;
