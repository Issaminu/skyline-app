import { z } from 'zod';
import { BuildingUpdateInputObjectSchema } from './objects/BuildingUpdateInput.schema';
import { BuildingUncheckedUpdateInputObjectSchema } from './objects/BuildingUncheckedUpdateInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './objects/BuildingWhereUniqueInput.schema';

export const BuildingUpdateOneSchema = z.object({
  data: z.union([
    BuildingUpdateInputObjectSchema,
    BuildingUncheckedUpdateInputObjectSchema,
  ]),
  where: BuildingWhereUniqueInputObjectSchema,
});
