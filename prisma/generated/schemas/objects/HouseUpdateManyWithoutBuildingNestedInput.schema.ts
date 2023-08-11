import { z } from 'zod';
import { HouseCreateWithoutBuildingInputObjectSchema } from './HouseCreateWithoutBuildingInput.schema';
import { HouseUncheckedCreateWithoutBuildingInputObjectSchema } from './HouseUncheckedCreateWithoutBuildingInput.schema';
import { HouseCreateOrConnectWithoutBuildingInputObjectSchema } from './HouseCreateOrConnectWithoutBuildingInput.schema';
import { HouseUpsertWithWhereUniqueWithoutBuildingInputObjectSchema } from './HouseUpsertWithWhereUniqueWithoutBuildingInput.schema';
import { HouseCreateManyBuildingInputEnvelopeObjectSchema } from './HouseCreateManyBuildingInputEnvelope.schema';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseUpdateWithWhereUniqueWithoutBuildingInputObjectSchema } from './HouseUpdateWithWhereUniqueWithoutBuildingInput.schema';
import { HouseUpdateManyWithWhereWithoutBuildingInputObjectSchema } from './HouseUpdateManyWithWhereWithoutBuildingInput.schema';
import { HouseScalarWhereInputObjectSchema } from './HouseScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpdateManyWithoutBuildingNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => HouseCreateWithoutBuildingInputObjectSchema),
        z.lazy(() => HouseCreateWithoutBuildingInputObjectSchema).array(),
        z.lazy(() => HouseUncheckedCreateWithoutBuildingInputObjectSchema),
        z
          .lazy(() => HouseUncheckedCreateWithoutBuildingInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => HouseCreateOrConnectWithoutBuildingInputObjectSchema),
        z
          .lazy(() => HouseCreateOrConnectWithoutBuildingInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => HouseUpsertWithWhereUniqueWithoutBuildingInputObjectSchema,
        ),
        z
          .lazy(
            () => HouseUpsertWithWhereUniqueWithoutBuildingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => HouseCreateManyBuildingInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => HouseWhereUniqueInputObjectSchema),
        z.lazy(() => HouseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => HouseWhereUniqueInputObjectSchema),
        z.lazy(() => HouseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => HouseWhereUniqueInputObjectSchema),
        z.lazy(() => HouseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => HouseWhereUniqueInputObjectSchema),
        z.lazy(() => HouseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => HouseUpdateWithWhereUniqueWithoutBuildingInputObjectSchema,
        ),
        z
          .lazy(
            () => HouseUpdateWithWhereUniqueWithoutBuildingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => HouseUpdateManyWithWhereWithoutBuildingInputObjectSchema),
        z
          .lazy(() => HouseUpdateManyWithWhereWithoutBuildingInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => HouseScalarWhereInputObjectSchema),
        z.lazy(() => HouseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const HouseUpdateManyWithoutBuildingNestedInputObjectSchema = Schema;
