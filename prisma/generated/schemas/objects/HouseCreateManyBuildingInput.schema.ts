import { z } from 'zod';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateManyBuildingInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    size: z.number(),
    status: z.lazy(() => HouseStatusSchema),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const HouseCreateManyBuildingInputObjectSchema = Schema;
