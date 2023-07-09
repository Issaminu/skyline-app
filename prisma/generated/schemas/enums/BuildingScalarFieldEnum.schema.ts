import { z } from 'zod';

export const BuildingScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'city',
  'address',
  'surface',
  'thumbnail',
  'creatorId',
  'createdAt',
  'updatedAt',
]);
