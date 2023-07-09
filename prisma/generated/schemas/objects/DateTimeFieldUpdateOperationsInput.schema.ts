import { z } from 'zod';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z
  .object({
    set: z.coerce.date().optional(),
  })
  .strict();

export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema;
