import { z } from 'zod';
import { HouseCreateNestedOneWithoutContributionsInputObjectSchema } from './HouseCreateNestedOneWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateWithoutContributorInput> = z
  .object({
    amount: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    house: z.lazy(
      () => HouseCreateNestedOneWithoutContributionsInputObjectSchema,
    ),
  })
  .strict();

export const ContributionCreateWithoutContributorInputObjectSchema = Schema;
