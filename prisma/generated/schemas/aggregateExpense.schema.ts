import { z } from 'zod';
import { ExpenseOrderByWithRelationInputObjectSchema } from './objects/ExpenseOrderByWithRelationInput.schema';
import { ExpenseWhereInputObjectSchema } from './objects/ExpenseWhereInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';
import { ExpenseCountAggregateInputObjectSchema } from './objects/ExpenseCountAggregateInput.schema';
import { ExpenseMinAggregateInputObjectSchema } from './objects/ExpenseMinAggregateInput.schema';
import { ExpenseMaxAggregateInputObjectSchema } from './objects/ExpenseMaxAggregateInput.schema';
import { ExpenseAvgAggregateInputObjectSchema } from './objects/ExpenseAvgAggregateInput.schema';
import { ExpenseSumAggregateInputObjectSchema } from './objects/ExpenseSumAggregateInput.schema';

export const ExpenseAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), ExpenseCountAggregateInputObjectSchema])
    .optional(),
  _min: ExpenseMinAggregateInputObjectSchema.optional(),
  _max: ExpenseMaxAggregateInputObjectSchema.optional(),
  _avg: ExpenseAvgAggregateInputObjectSchema.optional(),
  _sum: ExpenseSumAggregateInputObjectSchema.optional(),
});
