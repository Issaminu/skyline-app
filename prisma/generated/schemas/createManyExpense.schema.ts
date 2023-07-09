import { z } from 'zod';
import { ExpenseCreateManyInputObjectSchema } from './objects/ExpenseCreateManyInput.schema';

export const ExpenseCreateManySchema = z.object({
  data: z.union([
    ExpenseCreateManyInputObjectSchema,
    z.array(ExpenseCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
