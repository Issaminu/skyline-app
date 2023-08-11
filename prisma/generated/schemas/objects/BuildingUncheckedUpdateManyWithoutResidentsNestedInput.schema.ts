import { z } from 'zod';
import { BuildingCreateWithoutResidentsInputObjectSchema } from './BuildingCreateWithoutResidentsInput.schema';
import { BuildingUncheckedCreateWithoutResidentsInputObjectSchema } from './BuildingUncheckedCreateWithoutResidentsInput.schema';
import { BuildingCreateOrConnectWithoutResidentsInputObjectSchema } from './BuildingCreateOrConnectWithoutResidentsInput.schema';
import { BuildingUpsertWithWhereUniqueWithoutResidentsInputObjectSchema } from './BuildingUpsertWithWhereUniqueWithoutResidentsInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithWhereUniqueWithoutResidentsInputObjectSchema } from './BuildingUpdateWithWhereUniqueWithoutResidentsInput.schema';
import { BuildingUpdateManyWithWhereWithoutResidentsInputObjectSchema } from './BuildingUpdateManyWithWhereWithoutResidentsInput.schema';
import { BuildingScalarWhereInputObjectSchema } from './BuildingScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUncheckedUpdateManyWithoutResidentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BuildingCreateWithoutResidentsInputObjectSchema),
          z.lazy(() => BuildingCreateWithoutResidentsInputObjectSchema).array(),
          z.lazy(
            () => BuildingUncheckedCreateWithoutResidentsInputObjectSchema,
          ),
          z
            .lazy(
              () => BuildingUncheckedCreateWithoutResidentsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BuildingCreateOrConnectWithoutResidentsInputObjectSchema,
          ),
          z
            .lazy(
              () => BuildingCreateOrConnectWithoutResidentsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BuildingUpsertWithWhereUniqueWithoutResidentsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BuildingUpsertWithWhereUniqueWithoutResidentsInputObjectSchema,
            )
            .array(),
        ])
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
            () =>
              BuildingUpdateWithWhereUniqueWithoutResidentsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BuildingUpdateWithWhereUniqueWithoutResidentsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BuildingUpdateManyWithWhereWithoutResidentsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BuildingUpdateManyWithWhereWithoutResidentsInputObjectSchema,
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

export const BuildingUncheckedUpdateManyWithoutResidentsNestedInputObjectSchema =
  Schema;
