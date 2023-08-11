import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';
import { ExpenseCreateInputObjectSchema } from './objects/ExpenseCreateInput.schema';
import { ExpenseUncheckedCreateInputObjectSchema } from './objects/ExpenseUncheckedCreateInput.schema';
import { ExpenseUpdateInputObjectSchema } from './objects/ExpenseUpdateInput.schema';
import { ExpenseUncheckedUpdateInputObjectSchema } from './objects/ExpenseUncheckedUpdateInput.schema';

export const ExpenseUpsertSchema = z.object({
  where: ExpenseWhereUniqueInputObjectSchema,
  create: z.union([
    ExpenseCreateInputObjectSchema,
    ExpenseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExpenseUpdateInputObjectSchema,
    ExpenseUncheckedUpdateInputObjectSchema,
  ]),
});
