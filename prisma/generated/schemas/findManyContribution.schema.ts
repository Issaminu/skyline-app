import { z } from 'zod';
import { ContributionOrderByWithRelationInputObjectSchema } from './objects/ContributionOrderByWithRelationInput.schema';
import { ContributionWhereInputObjectSchema } from './objects/ContributionWhereInput.schema';
import { ContributionWhereUniqueInputObjectSchema } from './objects/ContributionWhereUniqueInput.schema';
import { ContributionScalarFieldEnumSchema } from './enums/ContributionScalarFieldEnum.schema';

export const ContributionFindManySchema = z.object({
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
  distinct: z.array(ContributionScalarFieldEnumSchema).optional(),
});
