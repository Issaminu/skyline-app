import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseUpdateWithoutBuildingInputObjectSchema } from './HouseUpdateWithoutBuildingInput.schema';
import { HouseUncheckedUpdateWithoutBuildingInputObjectSchema } from './HouseUncheckedUpdateWithoutBuildingInput.schema';
import { HouseCreateWithoutBuildingInputObjectSchema } from './HouseCreateWithoutBuildingInput.schema';
import { HouseUncheckedCreateWithoutBuildingInputObjectSchema } from './HouseUncheckedCreateWithoutBuildingInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpsertWithWhereUniqueWithoutBuildingInput> =
  z
    .object({
      where: z.lazy(() => HouseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => HouseUpdateWithoutBuildingInputObjectSchema),
        z.lazy(() => HouseUncheckedUpdateWithoutBuildingInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => HouseCreateWithoutBuildingInputObjectSchema),
        z.lazy(() => HouseUncheckedCreateWithoutBuildingInputObjectSchema),
      ]),
    })
    .strict();

export const HouseUpsertWithWhereUniqueWithoutBuildingInputObjectSchema =
  Schema;
