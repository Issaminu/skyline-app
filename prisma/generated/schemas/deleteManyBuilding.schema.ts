import { z } from 'zod';
import { BuildingWhereInputObjectSchema } from './objects/BuildingWhereInput.schema';

export const BuildingDeleteManySchema = z.object({
  where: BuildingWhereInputObjectSchema.optional(),
});
