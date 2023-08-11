import { z } from 'zod';
import { ContributionOrderByWithRelationInputObjectSchema } from './objects/ContributionOrderByWithRelationInput.schema';
import { ContributionWhereInputObjectSchema } from './objects/ContributionWhereInput.schema';
import { ContributionWhereUniqueInputObjectSchema } from './objects/ContributionWhereUniqueInput.schema';
import { ContributionCountAggregateInputObjectSchema } from './objects/ContributionCountAggregateInput.schema';
import { ContributionMinAggregateInputObjectSchema } from './objects/ContributionMinAggregateInput.schema';
import { ContributionMaxAggregateInputObjectSchema } from './objects/ContributionMaxAggregateInput.schema';
import { ContributionAvgAggregateInputObjectSchema } from './objects/ContributionAvgAggregateInput.schema';
import { ContributionSumAggregateInputObjectSchema } from './objects/ContributionSumAggregateInput.schema';

export const ContributionAggregateSchema = z.object({
  orderBy: z
    .union([
      ContributionOrderByWithRelationInputObjectSchema,
      ContributionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ContributionWhereInputObjectSchema.optional(),
  cursor: ContributionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ContributionCountAggregateInputObjectSchema])
    .optional(),
  _min: ContributionMinAggregateInputObjectSchema.optional(),
  _max: ContributionMaxAggregateInputObjectSchema.optional(),
  _avg: ContributionAvgAggregateInputObjectSchema.optional(),
  _sum: ContributionSumAggregateInputObjectSchema.optional(),
});
