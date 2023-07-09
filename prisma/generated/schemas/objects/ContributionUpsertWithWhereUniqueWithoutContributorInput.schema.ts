import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionUpdateWithoutContributorInputObjectSchema } from './ContributionUpdateWithoutContributorInput.schema';
import { ContributionUncheckedUpdateWithoutContributorInputObjectSchema } from './ContributionUncheckedUpdateWithoutContributorInput.schema';
import { ContributionCreateWithoutContributorInputObjectSchema } from './ContributionCreateWithoutContributorInput.schema';
import { ContributionUncheckedCreateWithoutContributorInputObjectSchema } from './ContributionUncheckedCreateWithoutContributorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUpsertWithWhereUniqueWithoutContributorInput> =
  z
    .object({
      where: z.lazy(() => ContributionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ContributionUpdateWithoutContributorInputObjectSchema),
        z.lazy(
          () => ContributionUncheckedUpdateWithoutContributorInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ContributionCreateWithoutContributorInputObjectSchema),
        z.lazy(
          () => ContributionUncheckedCreateWithoutContributorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ContributionUpsertWithWhereUniqueWithoutContributorInputObjectSchema =
  Schema;
