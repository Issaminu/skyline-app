import { z } from 'zod';
import { InvitationWhereInputObjectSchema } from './InvitationWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationListRelationFilter> = z
  .object({
    every: z.lazy(() => InvitationWhereInputObjectSchema).optional(),
    some: z.lazy(() => InvitationWhereInputObjectSchema).optional(),
    none: z.lazy(() => InvitationWhereInputObjectSchema).optional(),
  })
  .strict();

export const InvitationListRelationFilterObjectSchema = Schema;
