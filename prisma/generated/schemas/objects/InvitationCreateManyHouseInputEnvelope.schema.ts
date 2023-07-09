import { z } from 'zod';
import { InvitationCreateManyHouseInputObjectSchema } from './InvitationCreateManyHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateManyHouseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvitationCreateManyHouseInputObjectSchema),
      z.lazy(() => InvitationCreateManyHouseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvitationCreateManyHouseInputEnvelopeObjectSchema = Schema;
