import { z } from 'zod';
import { ContributionCreateWithoutContributorInputObjectSchema } from './ContributionCreateWithoutContributorInput.schema';
import { ContributionUncheckedCreateWithoutContributorInputObjectSchema } from './ContributionUncheckedCreateWithoutContributorInput.schema';
import { ContributionCreateOrConnectWithoutContributorInputObjectSchema } from './ContributionCreateOrConnectWithoutContributorInput.schema';
import { ContributionCreateManyContributorInputEnvelopeObjectSchema } from './ContributionCreateManyContributorInputEnvelope.schema';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateNestedManyWithoutContributorInput> =
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
      createMany: z
        .lazy(() => ContributionCreateManyContributorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContributionWhereUniqueInputObjectSchema),
          z.lazy(() => ContributionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContributionCreateNestedManyWithoutContributorInputObjectSchema =
  Schema;
