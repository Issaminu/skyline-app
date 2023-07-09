import { z } from 'zod';
import { BuildingCreateManyInputObjectSchema } from './objects/BuildingCreateManyInput.schema';

export const BuildingCreateManySchema = z.object({
  data: z.union([
    BuildingCreateManyInputObjectSchema,
    z.array(BuildingCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
