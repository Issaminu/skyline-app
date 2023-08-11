import { z } from 'zod';
import { BuildingOrderByWithRelationInputObjectSchema } from './objects/BuildingOrderByWithRelationInput.schema';
import { BuildingWhereInputObjectSchema } from './objects/BuildingWhereInput.schema';
import { BuildingWhereUniqueInputObjectSchema } from './objects/BuildingWhereUniqueInput.schema';
import { BuildingScalarFieldEnumSchema } from './enums/BuildingScalarFieldEnum.schema';

export const BuildingFindManySchema = z.object({
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
  distinct: z.array(BuildingScalarFieldEnumSchema).optional(),
});
