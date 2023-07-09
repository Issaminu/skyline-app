import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionUpdateWithoutHouseInputObjectSchema } from './ContributionUpdateWithoutHouseInput.schema';
import { ContributionUncheckedUpdateWithoutHouseInputObjectSchema } from './ContributionUncheckedUpdateWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUpdateWithWhereUniqueWithoutHouseInput> =
  z
    .object({
      where: z.lazy(() => ContributionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ContributionUpdateWithoutHouseInputObjectSchema),
        z.lazy(() => ContributionUncheckedUpdateWithoutHouseInputObjectSchema),
      ]),
    })
    .strict();

export const ContributionUpdateWithWhereUniqueWithoutHouseInputObjectSchema =
  Schema;
