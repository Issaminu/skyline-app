import { z } from 'zod';
import { HouseWhereInputObjectSchema } from './objects/HouseWhereInput.schema';
import { HouseOrderByWithAggregationInputObjectSchema } from './objects/HouseOrderByWithAggregationInput.schema';
import { HouseScalarWhereWithAggregatesInputObjectSchema } from './objects/HouseScalarWhereWithAggregatesInput.schema';
import { HouseScalarFieldEnumSchema } from './enums/HouseScalarFieldEnum.schema';

export const HouseGroupBySchema = z.object({
  where: HouseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      HouseOrderByWithAggregationInputObjectSchema,
      HouseOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: HouseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(HouseScalarFieldEnumSchema),
});
