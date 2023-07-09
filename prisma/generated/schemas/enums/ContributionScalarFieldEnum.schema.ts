import { z } from 'zod';

export const ContributionScalarFieldEnumSchema = z.enum([
  'id',
  'amount',
  'contributorId',
  'houseId',
  'createdAt',
  'updatedAt',
]);
