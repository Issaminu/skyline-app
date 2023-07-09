import { z } from 'zod';
import { HouseCreateWithoutContributionsInputObjectSchema } from './HouseCreateWithoutContributionsInput.schema';
import { HouseUncheckedCreateWithoutContributionsInputObjectSchema } from './HouseUncheckedCreateWithoutContributionsInput.schema';
import { HouseCreateOrConnectWithoutContributionsInputObjectSchema } from './HouseCreateOrConnectWithoutContributionsInput.schema';
import { HouseUpsertWithoutContributionsInputObjectSchema } from './HouseUpsertWithoutContributionsInput.schema';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseUpdateWithoutContributionsInputObjectSchema } from './HouseUpdateWithoutContributionsInput.schema';
import { HouseUncheckedUpdateWithoutContributionsInputObjectSchema } from './HouseUncheckedUpdateWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpdateOneRequiredWithoutContributionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HouseCreateWithoutContributionsInputObjectSchema),
          z.lazy(
            () => HouseUncheckedCreateWithoutContributionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => HouseCreateOrConnectWithoutContributionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => HouseUpsertWithoutContributionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => HouseWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => HouseUpdateWithoutContributionsInputObjectSchema),
          z.lazy(
            () => HouseUncheckedUpdateWithoutContributionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const HouseUpdateOneRequiredWithoutContributionsNestedInputObjectSchema =
  Schema;
