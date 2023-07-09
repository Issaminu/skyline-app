import { z } from 'zod';
import { HouseOrderByWithRelationInputObjectSchema } from './objects/HouseOrderByWithRelationInput.schema';
import { HouseWhereInputObjectSchema } from './objects/HouseWhereInput.schema';
import { HouseWhereUniqueInputObjectSchema } from './objects/HouseWhereUniqueInput.schema';
import { HouseCountAggregateInputObjectSchema } from './objects/HouseCountAggregateInput.schema';
import { HouseMinAggregateInputObjectSchema } from './objects/HouseMinAggregateInput.schema';
import { HouseMaxAggregateInputObjectSchema } from './objects/HouseMaxAggregateInput.schema';
import { HouseAvgAggregateInputObjectSchema } from './objects/HouseAvgAggregateInput.schema';
import { HouseSumAggregateInputObjectSchema } from './objects/HouseSumAggregateInput.schema';

export const HouseAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), HouseCountAggregateInputObjectSchema])
    .optional(),
  _min: HouseMinAggregateInputObjectSchema.optional(),
  _max: HouseMaxAggregateInputObjectSchema.optional(),
  _avg: HouseAvgAggregateInputObjectSchema.optional(),
  _sum: HouseSumAggregateInputObjectSchema.optional(),
});
