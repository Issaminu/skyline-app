import { z } from 'zod';
import { ContributionCreateWithoutHouseInputObjectSchema } from './ContributionCreateWithoutHouseInput.schema';
import { ContributionUncheckedCreateWithoutHouseInputObjectSchema } from './ContributionUncheckedCreateWithoutHouseInput.schema';
import { ContributionCreateOrConnectWithoutHouseInputObjectSchema } from './ContributionCreateOrConnectWithoutHouseInput.schema';
import { ContributionUpsertWithWhereUniqueWithoutHouseInputObjectSchema } from './ContributionUpsertWithWhereUniqueWithoutHouseInput.schema';
import { ContributionCreateManyHouseInputEnvelopeObjectSchema } from './ContributionCreateManyHouseInputEnvelope.schema';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionUpdateWithWhereUniqueWithoutHouseInputObjectSchema } from './ContributionUpdateWithWhereUniqueWithoutHouseInput.schema';
import { ContributionUpdateManyWithWhereWithoutHouseInputObjectSchema } from './ContributionUpdateManyWithWhereWithoutHouseInput.schema';
import { ContributionScalarWhereInputObjectSchema } from './ContributionScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUncheckedUpdateManyWithoutHouseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContributionCreateWithoutHouseInputObjectSchema),
          z.lazy(() => ContributionCreateWithoutHouseInputObjectSchema).array(),
          z.lazy(
            () => ContributionUncheckedCreateWithoutHouseInputObjectSchema,
          ),
          z
            .lazy(
              () => ContributionUncheckedCreateWithoutHouseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContributionCreateOrConnectWithoutHouseInputObjectSchema,
          ),
          z
            .lazy(
              () => ContributionCreateOrConnectWithoutHouseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContributionUpsertWithWhereUniqueWithoutHouseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionUpsertWithWhereUniqueWithoutHouseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContributionCreateManyHouseInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContributionWhereUniqueInputObjectSchema),
          z.lazy(() => ContributionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContributionWhereUniqueInputObjectSchema),
          z.lazy(() => ContributionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContributionWhereUniqueInputObjectSchema),
          z.lazy(() => ContributionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContributionWhereUniqueInputObjectSchema),
          z.lazy(() => ContributionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContributionUpdateWithWhereUniqueWithoutHouseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionUpdateWithWhereUniqueWithoutHouseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContributionUpdateManyWithWhereWithoutHouseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionUpdateManyWithWhereWithoutHouseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContributionScalarWhereInputObjectSchema),
          z.lazy(() => ContributionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContributionUncheckedUpdateManyWithoutHouseNestedInputObjectSchema =
  Schema;
