import { z } from 'zod';
import { HouseUpdateInputObjectSchema } from './objects/HouseUpdateInput.schema';
import { HouseUncheckedUpdateInputObjectSchema } from './objects/HouseUncheckedUpdateInput.schema';
import { HouseWhereUniqueInputObjectSchema } from './objects/HouseWhereUniqueInput.schema';

export const HouseUpdateOneSchema = z.object({
  data: z.union([
    HouseUpdateInputObjectSchema,
    HouseUncheckedUpdateInputObjectSchema,
  ]),
  where: HouseWhereUniqueInputObjectSchema,
});
