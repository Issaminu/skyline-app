import { z } from 'zod';
import { BuildingScalarWhereInputObjectSchema } from './BuildingScalarWhereInput.schema';
import { BuildingUpdateManyMutationInputObjectSchema } from './BuildingUpdateManyMutationInput.schema';
import { BuildingUncheckedUpdateManyWithoutCreatorOfBuildingsInputObjectSchema } from './BuildingUncheckedUpdateManyWithoutCreatorOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateManyWithWhereWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => BuildingScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BuildingUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BuildingUncheckedUpdateManyWithoutCreatorOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BuildingUpdateManyWithWhereWithoutCreatorInputObjectSchema =
  Schema;
