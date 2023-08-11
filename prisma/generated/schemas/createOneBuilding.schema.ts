import { z } from 'zod';
import { BuildingCreateInputObjectSchema } from './objects/BuildingCreateInput.schema';
import { BuildingUncheckedCreateInputObjectSchema } from './objects/BuildingUncheckedCreateInput.schema';

export const BuildingCreateOneSchema = z.object({
  data: z.union([
    BuildingCreateInputObjectSchema,
    BuildingUncheckedCreateInputObjectSchema,
  ]),
});
