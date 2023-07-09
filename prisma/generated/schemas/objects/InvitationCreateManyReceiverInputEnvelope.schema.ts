import { z } from 'zod';
import { InvitationCreateManyReceiverInputObjectSchema } from './InvitationCreateManyReceiverInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateManyReceiverInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvitationCreateManyReceiverInputObjectSchema),
      z.lazy(() => InvitationCreateManyReceiverInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvitationCreateManyReceiverInputEnvelopeObjectSchema = Schema;
