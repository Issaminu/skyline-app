import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './HouseWhereUniqueInput.schema';
import { HouseCreateWithoutBuildingInputObjectSchema } from './HouseCreateWithoutBuildingInput.schema';
import { HouseUncheckedCreateWithoutBuildingInputObjectSchema } from './HouseUncheckedCreateWithoutBuildingInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateOrConnectWithoutBuildingInput> = z
  .object({
    where: z.lazy(() => HouseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => HouseCreateWithoutBuildingInputObjectSchema),
      z.lazy(() => HouseUncheckedCreateWithoutBuildingInputObjectSchema),
    ]),
  })
  .strict();

export const HouseCreateOrConnectWithoutBuildingInputObjectSchema = Schema;
