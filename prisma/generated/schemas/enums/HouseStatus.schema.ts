import { z } from 'zod';

export const HouseStatusSchema = z.enum(['AVAILABLE', 'OCCUPIED', 'RESERVED']);
