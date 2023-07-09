import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionCreateWithoutHouseInputObjectSchema } from './ContributionCreateWithoutHouseInput.schema';
import { ContributionUncheckedCreateWithoutHouseInputObjectSchema } from './ContributionUncheckedCreateWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateOrConnectWithoutHouseInput> = z
  .object({
    where: z.lazy(() => ContributionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContributionCreateWithoutHouseInputObjectSchema),
      z.lazy(() => ContributionUncheckedCreateWithoutHouseInputObjectSchema),
    ]),
  })
  .strict();

export const ContributionCreateOrConnectWithoutHouseInputObjectSchema = Schema;
