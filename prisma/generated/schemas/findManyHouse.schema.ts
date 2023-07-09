import { z } from 'zod';
import { HouseOrderByWithRelationInputObjectSchema } from './objects/HouseOrderByWithRelationInput.schema';
import { HouseWhereInputObjectSchema } from './objects/HouseWhereInput.schema';
import { HouseWhereUniqueInputObjectSchema } from './objects/HouseWhereUniqueInput.schema';
import { HouseScalarFieldEnumSchema } from './enums/HouseScalarFieldEnum.schema';

export const HouseFindManySchema = z.object({
  orderBy: z
    .union([
      HouseOrderByWithRelationInputObjectSchema,
      HouseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: HouseWhereInputObjectSchema.optional(),
  cursor: HouseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(HouseScalarFieldEnumSchema).optional(),
});
