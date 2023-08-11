import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './objects/HouseWhereUniqueInput.schema';

export const HouseFindUniqueSchema = z.object({
  where: HouseWhereUniqueInputObjectSchema,
});
