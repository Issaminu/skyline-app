import { z } from 'zod';

export const HouseScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'size',
  'status',
  'buildingId',
  'createdAt',
  'updatedAt',
]);
