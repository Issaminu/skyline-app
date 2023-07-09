import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';

export const ExpenseFindUniqueSchema = z.object({
  where: ExpenseWhereUniqueInputObjectSchema,
});
