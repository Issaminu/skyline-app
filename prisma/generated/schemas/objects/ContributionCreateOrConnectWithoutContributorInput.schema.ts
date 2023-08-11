import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionCreateWithoutContributorInputObjectSchema } from './ContributionCreateWithoutContributorInput.schema';
import { ContributionUncheckedCreateWithoutContributorInputObjectSchema } from './ContributionUncheckedCreateWithoutContributorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateOrConnectWithoutContributorInput> =
  z
    .object({
      where: z.lazy(() => ContributionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ContributionCreateWithoutContributorInputObjectSchema),
        z.lazy(
          () => ContributionUncheckedCreateWithoutContributorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ContributionCreateOrConnectWithoutContributorInputObjectSchema =
  Schema;
