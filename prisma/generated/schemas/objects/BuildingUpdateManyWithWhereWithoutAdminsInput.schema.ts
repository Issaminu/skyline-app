import { z } from 'zod';
import { BuildingScalarWhereInputObjectSchema } from './BuildingScalarWhereInput.schema';
import { BuildingUpdateManyMutationInputObjectSchema } from './BuildingUpdateManyMutationInput.schema';
import { BuildingUncheckedUpdateManyWithoutAdminOfBuildingsInputObjectSchema } from './BuildingUncheckedUpdateManyWithoutAdminOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateManyWithWhereWithoutAdminsInput> =
  z
    .object({
      where: z.lazy(() => BuildingScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BuildingUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BuildingUncheckedUpdateManyWithoutAdminOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BuildingUpdateManyWithWhereWithoutAdminsInputObjectSchema = Schema;
