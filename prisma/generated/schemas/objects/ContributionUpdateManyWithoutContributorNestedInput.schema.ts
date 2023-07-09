import { z } from 'zod';
import { ContributionCreateWithoutContributorInputObjectSchema } from './ContributionCreateWithoutContributorInput.schema';
import { ContributionUncheckedCreateWithoutContributorInputObjectSchema } from './ContributionUncheckedCreateWithoutContributorInput.schema';
import { ContributionCreateOrConnectWithoutContributorInputObjectSchema } from './ContributionCreateOrConnectWithoutContributorInput.schema';
import { ContributionUpsertWithWhereUniqueWithoutContributorInputObjectSchema } from './ContributionUpsertWithWhereUniqueWithoutContributorInput.schema';
import { ContributionCreateManyContributorInputEnvelopeObjectSchema } from './ContributionCreateManyContributorInputEnvelope.schema';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionUpdateWithWhereUniqueWithoutContributorInputObjectSchema } from './ContributionUpdateWithWhereUniqueWithoutContributorInput.schema';
import { ContributionUpdateManyWithWhereWithoutContributorInputObjectSchema } from './ContributionUpdateManyWithWhereWithoutContributorInput.schema';
import { ContributionScalarWhereInputObjectSchema } from './ContributionScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUpdateManyWithoutContributorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContributionCreateWithoutContributorInputObjectSchema),
          z
            .lazy(() => ContributionCreateWithoutContributorInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ContributionUncheckedCreateWithoutContributorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionUncheckedCreateWithoutContributorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ContributionCreateOrConnectWithoutContributorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionCreateOrConnectWithoutContributorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContributionUpsertWithWhereUniqueWithoutContributorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionUpsertWithWhereUniqueWithoutContributorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContributionCreateManyContributorInputEnvelopeObjectSchema)
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
              ContributionUpdateWithWhereUniqueWithoutContributorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionUpdateWithWhereUniqueWithoutContributorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ContributionUpdateManyWithWhereWithoutContributorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ContributionUpdateManyWithWhereWithoutContributorInputObjectSchema,
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

export const ContributionUpdateManyWithoutContributorNestedInputObjectSchema =
  Schema;
