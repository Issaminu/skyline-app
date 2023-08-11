import { z } from 'zod';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EnumHouseStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => HouseStatusSchema).optional(),
  })
  .strict();

export const EnumHouseStatusFieldUpdateOperationsInputObjectSchema = Schema;
