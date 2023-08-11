import { z } from 'zod';
import { ExpenseOrderByWithRelationInputObjectSchema } from './objects/ExpenseOrderByWithRelationInput.schema';
import { ExpenseWhereInputObjectSchema } from './objects/ExpenseWhereInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';
import { ExpenseScalarFieldEnumSchema } from './enums/ExpenseScalarFieldEnum.schema';

export const ExpenseFindFirstSchema = z.object({
  orderBy: z
    .union([
      ExpenseOrderByWithRelationInputObjectSchema,
      ExpenseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExpenseWhereInputObjectSchema.optional(),
  cursor: ExpenseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExpenseScalarFieldEnumSchema).optional(),
});
