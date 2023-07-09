import { z } from 'zod';
import { HouseCreateManyBuildingInputObjectSchema } from './HouseCreateManyBuildingInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateManyBuildingInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => HouseCreateManyBuildingInputObjectSchema),
      z.lazy(() => HouseCreateManyBuildingInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const HouseCreateManyBuildingInputEnvelopeObjectSchema = Schema;
