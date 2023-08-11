import { z } from 'zod';
import { BuildingCreateWithoutHousesInputObjectSchema } from './BuildingCreateWithoutHousesInput.schema';
import { BuildingUncheckedCreateWithoutHousesInputObjectSchema } from './BuildingUncheckedCreateWithoutHousesInput.schema';
import { BuildingCreateOrConnectWithoutHousesInputObjectSchema } from './BuildingCreateOrConnectWithoutHousesInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './BuildingWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateNestedOneWithoutHousesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BuildingCreateWithoutHousesInputObjectSchema),
        z.lazy(() => BuildingUncheckedCreateWithoutHousesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BuildingCreateOrConnectWithoutHousesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BuildingWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BuildingCreateNestedOneWithoutHousesInputObjectSchema = Schema;
