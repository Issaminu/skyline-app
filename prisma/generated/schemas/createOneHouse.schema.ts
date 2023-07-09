import { z } from 'zod';
import { HouseCreateInputObjectSchema } from './objects/HouseCreateInput.schema';
import { HouseUncheckedCreateInputObjectSchema } from './objects/HouseUncheckedCreateInput.schema';

export const HouseCreateOneSchema = z.object({
  data: z.union([
    HouseCreateInputObjectSchema,
    HouseUncheckedCreateInputObjectSchema,
  ]),
});
