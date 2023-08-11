import { z } from 'zod';
import { HouseUpdateWithoutContributionsInputObjectSchema } from './HouseUpdateWithoutContributionsInput.schema';
import { HouseUncheckedUpdateWithoutContributionsInputObjectSchema } from './HouseUncheckedUpdateWithoutContributionsInput.schema';
import { HouseCreateWithoutContributionsInputObjectSchema } from './HouseCreateWithoutContributionsInput.schema';
import { HouseUncheckedCreateWithoutContributionsInputObjectSchema } from './HouseUncheckedCreateWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpsertWithoutContributionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => HouseUpdateWithoutContributionsInputObjectSchema),
      z.lazy(() => HouseUncheckedUpdateWithoutContributionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => HouseCreateWithoutContributionsInputObjectSchema),
      z.lazy(() => HouseUncheckedCreateWithoutContributionsInputObjectSchema),
    ]),
  })
  .strict();

export const HouseUpsertWithoutContributionsInputObjectSchema = Schema;
