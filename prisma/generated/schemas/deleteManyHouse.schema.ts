import { z } from 'zod';
import { HouseWhereInputObjectSchema } from './objects/HouseWhereInput.schema';

export const HouseDeleteManySchema = z.object({
  where: HouseWhereInputObjectSchema.optional(),
});
