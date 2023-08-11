import { z } from 'zod';
import { HouseCreateWithoutContributionsInputObjectSchema } from './HouseCreateWithoutContributionsInput.schema';
import { HouseUncheckedCreateWithoutContributionsInputObjectSchema } from './HouseUncheckedCreateWithoutContributionsInput.schema';
import { HouseCreateOrConnectWithoutContributionsInputObjectSchema } from './HouseCreateOrConnectWithoutContributionsInput.schema';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateNestedOneWithoutContributionsInput> =
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
      connect: z.lazy(() => HouseWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const HouseCreateNestedOneWithoutContributionsInputObjectSchema = Schema;
