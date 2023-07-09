import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './objects/HouseWhereUniqueInput.schema';

export const HouseDeleteOneSchema = z.object({
  where: HouseWhereUniqueInputObjectSchema,
});
