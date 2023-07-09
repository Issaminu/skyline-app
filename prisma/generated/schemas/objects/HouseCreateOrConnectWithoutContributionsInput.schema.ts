import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseCreateWithoutContributionsInputObjectSchema } from './HouseCreateWithoutContributionsInput.schema';
import { HouseUncheckedCreateWithoutContributionsInputObjectSchema } from './HouseUncheckedCreateWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateOrConnectWithoutContributionsInput> =
  z
    .object({
      where: z.lazy(() => HouseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => HouseCreateWithoutContributionsInputObjectSchema),
        z.lazy(() => HouseUncheckedCreateWithoutContributionsInputObjectSchema),
      ]),
    })
    .strict();

export const HouseCreateOrConnectWithoutContributionsInputObjectSchema = Schema;
