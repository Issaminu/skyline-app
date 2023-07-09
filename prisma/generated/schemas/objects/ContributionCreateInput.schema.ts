import { z } from 'zod';
import { UserCreateNestedOneWithoutContributionsInputObjectSchema } from './UserCreateNestedOneWithoutContributionsInput.schema';
import { HouseCreateNestedOneWithoutContributionsInputObjectSchema } from './HouseCreateNestedOneWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateInput> = z
  .object({
    amount: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contributor: z.lazy(
      () => UserCreateNestedOneWithoutContributionsInputObjectSchema,
    ),
    house: z.lazy(
      () => HouseCreateNestedOneWithoutContributionsInputObjectSchema,
    ),
  })
  .strict();

export const ContributionCreateInputObjectSchema = Schema;
