import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';
import { ContributionUpdateWithoutHouseInputObjectSchema } from './ContributionUpdateWithoutHouseInput.schema';
import { ContributionUncheckedUpdateWithoutHouseInputObjectSchema } from './ContributionUncheckedUpdateWithoutHouseInput.schema';
import { ContributionCreateWithoutHouseInputObjectSchema } from './ContributionCreateWithoutHouseInput.schema';
import { ContributionUncheckedCreateWithoutHouseInputObjectSchema } from './ContributionUncheckedCreateWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUpsertWithWhereUniqueWithoutHouseInput> =
  z
    .object({
      where: z.lazy(() => ContributionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ContributionUpdateWithoutHouseInputObjectSchema),
        z.lazy(() => ContributionUncheckedUpdateWithoutHouseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ContributionCreateWithoutHouseInputObjectSchema),
        z.lazy(() => ContributionUncheckedCreateWithoutHouseInputObjectSchema),
      ]),
    })
    .strict();

export const ContributionUpsertWithWhereUniqueWithoutHouseInputObjectSchema =
  Schema;
