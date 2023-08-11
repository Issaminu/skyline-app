import { z } from 'zod';
import { HouseWhereUniqueInputObjectSchema } from './objects/HouseWhereUniqueInput.schema';
import { HouseCreateInputObjectSchema } from './objects/HouseCreateInput.schema';
import { HouseUncheckedCreateInputObjectSchema } from './objects/HouseUncheckedCreateInput.schema';
import { HouseUpdateInputObjectSchema } from './objects/HouseUpdateInput.schema';
import { HouseUncheckedUpdateInputObjectSchema } from './objects/HouseUncheckedUpdateInput.schema';

export const HouseUpsertSchema = z.object({
  where: HouseWhereUniqueInputObjectSchema,
  create: z.union([
    HouseCreateInputObjectSchema,
    HouseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    HouseUpdateInputObjectSchema,
    HouseUncheckedUpdateInputObjectSchema,
  ]),
});
