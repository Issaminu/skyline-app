import { z } from 'zod';
import { BuildingUpdateManyMutationInputObjectSchema } from './objects/BuildingUpdateManyMutationInput.schema';
import { BuildingWhereInputObjectSchema } from './objects/BuildingWhereInput.schema';

export const BuildingUpdateManySchema = z.object({
  data: BuildingUpdateManyMutationInputObjectSchema,
  where: BuildingWhereInputObjectSchema.optional(),
});
