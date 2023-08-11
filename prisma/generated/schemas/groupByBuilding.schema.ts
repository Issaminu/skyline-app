import { z } from 'zod';
import { BuildingWhereInputObjectSchema } from './objects/BuildingWhereInput.schema';
import { BuildingOrderByWithAggregationInputObjectSchema } from './objects/BuildingOrderByWithAggregationInput.schema';
import { BuildingScalarWhereWithAggregatesInputObjectSchema } from './objects/BuildingScalarWhereWithAggregatesInput.schema';
import { BuildingScalarFieldEnumSchema } from './enums/BuildingScalarFieldEnum.schema';

export const BuildingGroupBySchema = z.object({
  where: BuildingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BuildingOrderByWithAggregationInputObjectSchema,
      BuildingOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BuildingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BuildingScalarFieldEnumSchema),
});
