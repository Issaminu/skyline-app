import { z } from 'zod';
import { BuildingCreateManyCreatorInputObjectSchema } from './BuildingCreateManyCreatorInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingCreateManyCreatorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BuildingCreateManyCreatorInputObjectSchema),
      z.lazy(() => BuildingCreateManyCreatorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BuildingCreateManyCreatorInputEnvelopeObjectSchema = Schema;
