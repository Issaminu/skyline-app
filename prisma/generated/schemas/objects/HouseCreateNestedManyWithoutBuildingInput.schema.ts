import { z } from 'zod';
import { HouseCreateWithoutBuildingInputObjectSchema } from './HouseCreateWithoutBuildingInput.schema';
import { HouseUncheckedCreateWithoutBuildingInputObjectSchema } from './HouseUncheckedCreateWithoutBuildingInput.schema';
import { HouseCreateOrConnectWithoutBuildingInputObjectSchema } from './HouseCreateOrConnectWithoutBuildingInput.schema';
import { HouseCreateManyBuildingInputEnvelopeObjectSchema } from './HouseCreateManyBuildingInputEnvelope.schema';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateNestedManyWithoutBuildingInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => HouseCreateWithoutBuildingInputObjectSchema),
        z.lazy(() => HouseCreateWithoutBuildingInputObjectSchema).array(),
        z.lazy(() => HouseUncheckedCreateWithoutBuildingInputObjectSchema),
        z
          .lazy(() => HouseUncheckedCreateWithoutBuildingInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => HouseCreateOrConnectWithoutBuildingInputObjectSchema),
        z
          .lazy(() => HouseCreateOrConnectWithoutBuildingInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => HouseCreateManyBuildingInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => HouseWhereUniqueInputObjectSchema),
        z.lazy(() => HouseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const HouseCreateNestedManyWithoutBuildingInputObjectSchema = Schema;
