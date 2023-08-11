import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './objects/BuildingWhereUniqueInput.schema';

export const BuildingFindUniqueSchema = z.object({
  where: BuildingWhereUniqueInputObjectSchema,
});
