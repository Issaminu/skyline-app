import { z } from 'zod';
import { BuildingCreateWithoutCreatorInputObjectSchema } from './BuildingCreateWithoutCreatorInput.schema';
import { BuildingUncheckedCreateWithoutCreatorInputObjectSchema } from './BuildingUncheckedCreateWithoutCreatorInput.schema';
import { BuildingCreateOrConnectWithoutCreatorInputObjectSchema } from './BuildingCreateOrConnectWithoutCreatorInput.schema';
import { BuildingUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './BuildingUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { BuildingCreateManyCreatorInputEnvelopeObjectSchema } from './BuildingCreateManyCreatorInputEnvelope.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './BuildingUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { BuildingUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './BuildingUpdateManyWithWhereWithoutCreatorInput.schema';
import { BuildingScalarWhereInputObjectSchema } from './BuildingScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateManyWithoutCreatorNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BuildingCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => BuildingCreateWithoutCreatorInputObjectSchema).array(),
        z.lazy(() => BuildingUncheckedCreateWithoutCreatorInputObjectSchema),
        z
          .lazy(() => BuildingUncheckedCreateWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => BuildingCreateOrConnectWithoutCreatorInputObjectSchema),
        z
          .lazy(() => BuildingCreateOrConnectWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => BuildingUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
        ),
        z
          .lazy(
            () => BuildingUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => BuildingCreateManyCreatorInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => BuildingWhereUniqueInputObjectSchema),
        z.lazy(() => BuildingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => BuildingWhereUniqueInputObjectSchema),
        z.lazy(() => BuildingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => BuildingWhereUniqueInputObjectSchema),
        z.lazy(() => BuildingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => BuildingWhereUniqueInputObjectSchema),
        z.lazy(() => BuildingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => BuildingUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
        ),
        z
          .lazy(
            () => BuildingUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => BuildingUpdateManyWithWhereWithoutCreatorInputObjectSchema,
        ),
        z
          .lazy(
            () => BuildingUpdateManyWithWhereWithoutCreatorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => BuildingScalarWhereInputObjectSchema),
        z.lazy(() => BuildingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BuildingUpdateManyWithoutCreatorNestedInputObjectSchema = Schema;
