import { z } from 'zod';
import { ContributionWhereInputObjectSchema } from './objects/ContributionWhereInput.schema';
import { ContributionOrderByWithAggregationInputObjectSchema } from './objects/ContributionOrderByWithAggregationInput.schema';
import { ContributionScalarWhereWithAggregatesInputObjectSchema } from './objects/ContributionScalarWhereWithAggregatesInput.schema';
import { ContributionScalarFieldEnumSchema } from './enums/ContributionScalarFieldEnum.schema';

export const ContributionGroupBySchema = z.object({
  where: ContributionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ContributionOrderByWithAggregationInputObjectSchema,
      ContributionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ContributionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ContributionScalarFieldEnumSchema),
});
