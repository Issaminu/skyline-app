import { z } from 'zod';
import { InvitationCreateWithoutReceiverInputObjectSchema } from './InvitationCreateWithoutReceiverInput.schema';
import { InvitationUncheckedCreateWithoutReceiverInputObjectSchema } from './InvitationUncheckedCreateWithoutReceiverInput.schema';
import { InvitationCreateOrConnectWithoutReceiverInputObjectSchema } from './InvitationCreateOrConnectWithoutReceiverInput.schema';
import { InvitationUpsertWithWhereUniqueWithoutReceiverInputObjectSchema } from './InvitationUpsertWithWhereUniqueWithoutReceiverInput.schema';
import { InvitationCreateManyReceiverInputEnvelopeObjectSchema } from './InvitationCreateManyReceiverInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithWhereUniqueWithoutReceiverInputObjectSchema } from './InvitationUpdateWithWhereUniqueWithoutReceiverInput.schema';
import { InvitationUpdateManyWithWhereWithoutReceiverInputObjectSchema } from './InvitationUpdateManyWithWhereWithoutReceiverInput.schema';
import { InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutReceiverNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              InvitationUpsertWithWhereUniqueWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvitationUpsertWithWhereUniqueWithoutReceiverInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvitationCreateManyReceiverInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InvitationWhereUniqueInputObjectSchema),
          z.lazy(() => InvitationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InvitationWhereUniqueInputObjectSchema),
          z.lazy(() => InvitationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InvitationWhereUniqueInputObjectSchema),
          z.lazy(() => InvitationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvitationWhereUniqueInputObjectSchema),
          z.lazy(() => InvitationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InvitationUpdateWithWhereUniqueWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvitationUpdateWithWhereUniqueWithoutReceiverInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InvitationUpdateManyWithWhereWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvitationUpdateManyWithWhereWithoutReceiverInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InvitationScalarWhereInputObjectSchema),
          z.lazy(() => InvitationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvitationUncheckedUpdateManyWithoutReceiverNestedInputObjectSchema =
  Schema;
