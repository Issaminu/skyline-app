import { z } from 'zod';
import { ExpenseWhereInputObjectSchema } from './objects/ExpenseWhereInput.schema';

export const ExpenseDeleteManySchema = z.object({
  where: ExpenseWhereInputObjectSchema.optional(),
});
