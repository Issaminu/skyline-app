import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'password',
  'phone',
  'image',
  'isEmailVerified',
  'createdAt',
  'updatedAt',
]);
