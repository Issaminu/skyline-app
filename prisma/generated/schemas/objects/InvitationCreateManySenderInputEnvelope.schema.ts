import { z } from 'zod';
import { InvitationCreateManySenderInputObjectSchema } from './InvitationCreateManySenderInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationCreateManySenderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvitationCreateManySenderInputObjectSchema),
      z.lazy(() => InvitationCreateManySenderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvitationCreateManySenderInputEnvelopeObjectSchema = Schema;
