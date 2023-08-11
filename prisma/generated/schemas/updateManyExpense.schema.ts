import { z } from 'zod';
import { ExpenseUpdateManyMutationInputObjectSchema } from './objects/ExpenseUpdateManyMutationInput.schema';
import { ExpenseWhereInputObjectSchema } from './objects/ExpenseWhereInput.schema';

export const ExpenseUpdateManySchema = z.object({
  data: ExpenseUpdateManyMutationInputObjectSchema,
  where: ExpenseWhereInputObjectSchema.optional(),
});
