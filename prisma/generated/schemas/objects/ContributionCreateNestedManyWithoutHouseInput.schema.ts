import { z } from 'zod';
import { ContributionCreateWithoutHouseInputObjectSchema } from './ContributionCreateWithoutHouseInput.schema';
import { ContributionUncheckedCreateWithoutHouseInputObjectSchema } from './ContributionUncheckedCreateWithoutHouseInput.schema';
import { ContributionCreateOrConnectWithoutHouseInputObjectSchema } from './ContributionCreateOrConnectWithoutHouseInput.schema';
import { ContributionCreateManyHouseInputEnvelopeObjectSchema } from './ContributionCreateManyHouseInputEnvelope.schema';
import { ContributionWhereUniqueInputObjectSchema } from './ContributionWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionCreateNestedManyWithoutHouseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContributionCreateWithoutHouseInputObjectSchema),
          z.lazy(() => ContributionCreateWithoutHouseInputObjectSchema).array(),
          z.lazy(
            () => ContributionUncheckedCreateWithoutHouseInputObjectSchema,
          ),
          z
            .lazy(
              () => ContributionUncheckedCreateWithoutHouseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContributionCreateOrConnectWithoutHouseInputObjectSchema,
          ),
          z
            .lazy(
              () => ContributionCreateOrConnectWithoutHouseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContributionCreateManyHouseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContributionWhereUniqueInputObjectSchema),
          z.lazy(() => ContributionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContributionCreateNestedManyWithoutHouseInputObjectSchema = Schema;
