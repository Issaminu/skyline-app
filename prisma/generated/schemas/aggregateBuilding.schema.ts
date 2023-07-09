import { z } from 'zod';
import { BuildingOrderByWithRelationInputObjectSchema } from './objects/BuildingOrderByWithRelationInput.schema';
import { BuildingWhereInputObjectSchema } from './objects/BuildingWhereInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './objects/BuildingWhereUniqueInput.schema';
import { BuildingCountAggregateInputObjectSchema } from './objects/BuildingCountAggregateInput.schema';
import { BuildingMinAggregateInputObjectSchema } from './objects/BuildingMinAggregateInput.schema';
import { BuildingMaxAggregateInputObjectSchema } from './objects/BuildingMaxAggregateInput.schema';
import { BuildingAvgAggregateInputObjectSchema } from './objects/BuildingAvgAggregateInput.schema';
import { BuildingSumAggregateInputObjectSchema } from './objects/BuildingSumAggregateInput.schema';

export const BuildingAggregateSchema = z.object({
  orderBy: z
    .union([
      BuildingOrderByWithRelationInputObjectSchema,
      BuildingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BuildingWhereInputObjectSchema.optional(),
  cursor: BuildingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BuildingCountAggregateInputObjectSchema])
    .optional(),
  _min: BuildingMinAggregateInputObjectSchema.optional(),
  _max: BuildingMaxAggregateInputObjectSchema.optional(),
  _avg: BuildingAvgAggregateInputObjectSchema.optional(),
  _sum: BuildingSumAggregateInputObjectSchema.optional(),
});
