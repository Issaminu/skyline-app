import { z } from 'zod';
import { HouseCreateManyInputObjectSchema } from './objects/HouseCreateManyInput.schema';

export const HouseCreateManySchema = z.object({
  data: z.union([
    HouseCreateManyInputObjectSchema,
    z.array(HouseCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
