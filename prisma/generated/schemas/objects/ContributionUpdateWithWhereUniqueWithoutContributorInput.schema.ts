import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionUpdateWithoutContributorInputObjectSchema } from './ContributionUpdateWithoutContributorInput.schema';
import { ContributionUncheckedUpdateWithoutContributorInputObjectSchema } from './ContributionUncheckedUpdateWithoutContributorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUpdateWithWhereUniqueWithoutContributorInput> =
  z
    .object({
      where: z.lazy(() => ContributionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ContributionUpdateWithoutContributorInputObjectSchema),
        z.lazy(
          () => ContributionUncheckedUpdateWithoutContributorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ContributionUpdateWithWhereUniqueWithoutContributorInputObjectSchema =
  Schema;
