import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';

export const ExpenseDeleteOneSchema = z.object({
  where: ExpenseWhereUniqueInputObjectSchema,
});
