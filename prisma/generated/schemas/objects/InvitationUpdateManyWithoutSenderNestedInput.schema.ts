import { z } from 'zod';
import { InvitationCreateWithoutSenderInputObjectSchema } from './InvitationCreateWithoutSenderInput.schema';
import { InvitationUncheckedCreateWithoutSenderInputObjectSchema } from './InvitationUncheckedCreateWithoutSenderInput.schema';
import { InvitationCreateOrConnectWithoutSenderInputObjectSchema } from './InvitationCreateOrConnectWithoutSenderInput.schema';
import { InvitationUpsertWithWhereUniqueWithoutSenderInputObjectSchema } from './InvitationUpsertWithWhereUniqueWithoutSenderInput.schema';
import { InvitationCreateManySenderInputEnvelopeObjectSchema } from './InvitationCreateManySenderInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithWhereUniqueWithoutSenderInputObjectSchema } from './InvitationUpdateWithWhereUniqueWithoutSenderInput.schema';
import { InvitationUpdateManyWithWhereWithoutSenderInputObjectSchema } from './InvitationUpdateManyWithWhereWithoutSenderInput.schema';
import { InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateManyWithoutSenderNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => InvitationUpsertWithWhereUniqueWithoutSenderInputObjectSchema,
        ),
        z
          .lazy(
            () => InvitationUpsertWithWhereUniqueWithoutSenderInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => InvitationCreateManySenderInputEnvelopeObjectSchema)
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
          () => InvitationUpdateWithWhereUniqueWithoutSenderInputObjectSchema,
        ),
        z
          .lazy(
            () => InvitationUpdateWithWhereUniqueWithoutSenderInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => InvitationUpdateManyWithWhereWithoutSenderInputObjectSchema,
        ),
        z
          .lazy(
            () => InvitationUpdateManyWithWhereWithoutSenderInputObjectSchema,
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

export const InvitationUpdateManyWithoutSenderNestedInputObjectSchema = Schema;
