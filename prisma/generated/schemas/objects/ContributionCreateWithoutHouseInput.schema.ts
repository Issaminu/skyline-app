import { z } from 'zod';
import { UserCreateNestedOneWithoutContributionsInputObjectSchema } from './UserCreateNestedOneWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateWithoutHouseInput> = z
  .object({
    amount: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contributor: z.lazy(
      () => UserCreateNestedOneWithoutContributionsInputObjectSchema,
    ),
  })
  .strict();

export const ContributionCreateWithoutHouseInputObjectSchema = Schema;
