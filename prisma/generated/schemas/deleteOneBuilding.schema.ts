import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './objects/BuildingWhereUniqueInput.schema';

export const BuildingDeleteOneSchema = z.object({
  where: BuildingWhereUniqueInputObjectSchema,
});
