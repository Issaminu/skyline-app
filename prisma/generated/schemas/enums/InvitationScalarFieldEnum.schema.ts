import { z } from 'zod';

export const InvitationScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'senderId',
  'receiverId',
  'houseId',
  'createdAt',
  'updatedAt',
]);
