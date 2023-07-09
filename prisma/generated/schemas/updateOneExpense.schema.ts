import { z } from 'zod';
import { ExpenseUpdateInputObjectSchema } from './objects/ExpenseUpdateInput.schema';
import { ExpenseUncheckedUpdateInputObjectSchema } from './objects/ExpenseUncheckedUpdateInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';

export const ExpenseUpdateOneSchema = z.object({
  data: z.union([
    ExpenseUpdateInputObjectSchema,
    ExpenseUncheckedUpdateInputObjectSchema,
  ]),
  where: ExpenseWhereUniqueInputObjectSchema,
});
