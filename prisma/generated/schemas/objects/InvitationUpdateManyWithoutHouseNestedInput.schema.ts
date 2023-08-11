import { z } from 'zod';
import { InvitationCreateWithoutHouseInputObjectSchema } from './InvitationCreateWithoutHouseInput.schema';
import { InvitationUncheckedCreateWithoutHouseInputObjectSchema } from './InvitationUncheckedCreateWithoutHouseInput.schema';
import { InvitationCreateOrConnectWithoutHouseInputObjectSchema } from './InvitationCreateOrConnectWithoutHouseInput.schema';
import { InvitationUpsertWithWhereUniqueWithoutHouseInputObjectSchema } from './InvitationUpsertWithWhereUniqueWithoutHouseInput.schema';
import { InvitationCreateManyHouseInputEnvelopeObjectSchema } from './InvitationCreateManyHouseInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithWhereUniqueWithoutHouseInputObjectSchema } from './InvitationUpdateWithWhereUniqueWithoutHouseInput.schema';
import { InvitationUpdateManyWithWhereWithoutHouseInputObjectSchema } from './InvitationUpdateManyWithWhereWithoutHouseInput.schema';
import { InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateManyWithoutHouseNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => InvitationUpsertWithWhereUniqueWithoutHouseInputObjectSchema,
        ),
        z
          .lazy(
            () => InvitationUpsertWithWhereUniqueWithoutHouseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => InvitationCreateManyHouseInputEnvelopeObjectSchema)
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
          () => InvitationUpdateWithWhereUniqueWithoutHouseInputObjectSchema,
        ),
        z
          .lazy(
            () => InvitationUpdateWithWhereUniqueWithoutHouseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => InvitationUpdateManyWithWhereWithoutHouseInputObjectSchema,
        ),
        z
          .lazy(
            () => InvitationUpdateManyWithWhereWithoutHouseInputObjectSchema,
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

export const InvitationUpdateManyWithoutHouseNestedInputObjectSchema = Schema;
