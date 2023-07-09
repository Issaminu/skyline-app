import { z } from 'zod';
import { BuildingCreateWithoutAdminsInputObjectSchema } from './BuildingCreateWithoutAdminsInput.schema';
import { BuildingUncheckedCreateWithoutAdminsInputObjectSchema } from './BuildingUncheckedCreateWithoutAdminsInput.schema';
import { BuildingCreateOrConnectWithoutAdminsInputObjectSchema } from './BuildingCreateOrConnectWithoutAdminsInput.schema';
import { BuildingUpsertWithWhereUniqueWithoutAdminsInputObjectSchema } from './BuildingUpsertWithWhereUniqueWithoutAdminsInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';
import { BuildingUpdateWithWhereUniqueWithoutAdminsInputObjectSchema } from './BuildingUpdateWithWhereUniqueWithoutAdminsInput.schema';
import { BuildingUpdateManyWithWhereWithoutAdminsInputObjectSchema } from './BuildingUpdateManyWithWhereWithoutAdminsInput.schema';
import { BuildingScalarWhereInputObjectSchema } from './BuildingScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateManyWithoutAdminsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BuildingCreateWithoutAdminsInputObjectSchema),
        z.lazy(() => BuildingCreateWithoutAdminsInputObjectSchema).array(),
        z.lazy(() => BuildingUncheckedCreateWithoutAdminsInputObjectSchema),
        z
          .lazy(() => BuildingUncheckedCreateWithoutAdminsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => BuildingCreateOrConnectWithoutAdminsInputObjectSchema),
        z
          .lazy(() => BuildingCreateOrConnectWithoutAdminsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => BuildingUpsertWithWhereUniqueWithoutAdminsInputObjectSchema,
        ),
        z
          .lazy(
            () => BuildingUpsertWithWhereUniqueWithoutAdminsInputObjectSchema,
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
          () => BuildingUpdateWithWhereUniqueWithoutAdminsInputObjectSchema,
        ),
        z
          .lazy(
            () => BuildingUpdateWithWhereUniqueWithoutAdminsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => BuildingUpdateManyWithWhereWithoutAdminsInputObjectSchema),
        z
          .lazy(() => BuildingUpdateManyWithWhereWithoutAdminsInputObjectSchema)
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

export const BuildingUpdateManyWithoutAdminsNestedInputObjectSchema = Schema;
