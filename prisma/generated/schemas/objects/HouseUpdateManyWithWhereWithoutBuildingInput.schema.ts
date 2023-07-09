import { z } from 'zod';
import { HouseScalarWhereInputObjectSchema } from './HouseScalarWhereInput.schema';
import { HouseUpdateManyMutationInputObjectSchema } from './HouseUpdateManyMutationInput.schema';
import { HouseUncheckedUpdateManyWithoutHousesInputObjectSchema } from './HouseUncheckedUpdateManyWithoutHousesInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpdateManyWithWhereWithoutBuildingInput> = z
  .object({
    where: z.lazy(() => HouseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => HouseUpdateManyMutationInputObjectSchema),
      z.lazy(() => HouseUncheckedUpdateManyWithoutHousesInputObjectSchema),
    ]),
  })
  .strict();

export const HouseUpdateManyWithWhereWithoutBuildingInputObjectSchema = Schema;
