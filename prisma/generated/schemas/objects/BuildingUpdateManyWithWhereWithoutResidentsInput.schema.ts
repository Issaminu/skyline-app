import { z } from 'zod';
import { BuildingScalarWhereInputObjectSchema } from './BuildingScalarWhereInput.schema';
import { BuildingUpdateManyMutationInputObjectSchema } from './BuildingUpdateManyMutationInput.schema';
import { BuildingUncheckedUpdateManyWithoutResidentOfBuildingsInputObjectSchema } from './BuildingUncheckedUpdateManyWithoutResidentOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateManyWithWhereWithoutResidentsInput> =
  z
    .object({
      where: z.lazy(() => BuildingScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BuildingUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BuildingUncheckedUpdateManyWithoutResidentOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BuildingUpdateManyWithWhereWithoutResidentsInputObjectSchema =
  Schema;
