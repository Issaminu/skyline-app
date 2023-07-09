import { z } from 'zod';

export const ExpenseScalarFieldEnumSchema = z.enum([
  'id',
  'beneficiary',
  'adminId',
  'amount',
  'explanation',
  'createdAt',
  'updatedAt',
]);
