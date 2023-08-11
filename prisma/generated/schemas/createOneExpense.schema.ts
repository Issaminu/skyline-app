import { z } from 'zod';
import { ExpenseCreateInputObjectSchema } from './objects/ExpenseCreateInput.schema';
import { ExpenseUncheckedCreateInputObjectSchema } from './objects/ExpenseUncheckedCreateInput.schema';

export const ExpenseCreateOneSchema = z.object({
  data: z.union([
    ExpenseCreateInputObjectSchema,
    ExpenseUncheckedCreateInputObjectSchema,
  ]),
});
