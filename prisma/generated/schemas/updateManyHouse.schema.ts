import { z } from 'zod';
import { HouseUpdateManyMutationInputObjectSchema } from './objects/HouseUpdateManyMutationInput.schema';
import { HouseWhereInputObjectSchema } from './objects/HouseWhereInput.schema';

export const HouseUpdateManySchema = z.object({
  data: HouseUpdateManyMutationInputObjectSchema,
  where: HouseWhereInputObjectSchema.optional(),
});
