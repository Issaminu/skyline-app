import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BuildingOrderByWithRelationInputObjectSchema } from './BuildingOrderByWithRelationInput.schema';
import { ContributionOrderByRelationAggregateInputObjectSchema } from './ContributionOrderByRelationAggregateInput.schema';
import { InvitationOrderByRelationAggregateInputObjectSchema } from './InvitationOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    buildingId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    Building: z
      .lazy(() => BuildingOrderByWithRelationInputObjectSchema)
      .optional(),
    Contributions: z
      .lazy(() => ContributionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Invitations: z
      .lazy(() => InvitationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const HouseOrderByWithRelationInputObjectSchema = Schema;
