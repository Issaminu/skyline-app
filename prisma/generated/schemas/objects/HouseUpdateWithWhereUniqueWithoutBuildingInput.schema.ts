import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseUpdateWithoutBuildingInputObjectSchema } from './HouseUpdateWithoutBuildingInput.schema';
import { HouseUncheckedUpdateWithoutBuildingInputObjectSchema } from './HouseUncheckedUpdateWithoutBuildingInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpdateWithWhereUniqueWithoutBuildingInput> =
  z
    .object({
      where: z.lazy(() => HouseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => HouseUpdateWithoutBuildingInputObjectSchema),
        z.lazy(() => HouseUncheckedUpdateWithoutBuildingInputObjectSchema),
      ]),
    })
    .strict();

export const HouseUpdateWithWhereUniqueWithoutBuildingInputObjectSchema =
  Schema;
