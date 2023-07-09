import { z } from 'zod';
import { ContributionScalarWhereInputObjectSchema } from './ContributionScalarWhereInput.schema';
import { ContributionUpdateManyMutationInputObjectSchema } from './ContributionUpdateManyMutationInput.schema';
import { ContributionUncheckedUpdateManyWithoutContributionsInputObjectSchema } from './ContributionUncheckedUpdateManyWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUpdateManyWithWhereWithoutHouseInput> =
  z
    .object({
      where: z.lazy(() => ContributionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ContributionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ContributionUncheckedUpdateManyWithoutContributionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ContributionUpdateManyWithWhereWithoutHouseInputObjectSchema =
  Schema;
