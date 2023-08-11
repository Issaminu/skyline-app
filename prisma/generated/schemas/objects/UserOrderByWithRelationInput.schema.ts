import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BuildingOrderByRelationAggregateInputObjectSchema } from './BuildingOrderByRelationAggregateInput.schema';
import { ContributionOrderByRelationAggregateInputObjectSchema } from './ContributionOrderByRelationAggregateInput.schema';
import { ExpenseOrderByRelationAggregateInputObjectSchema } from './ExpenseOrderByRelationAggregateInput.schema';
import { InvitationOrderByRelationAggregateInputObjectSchema } from './InvitationOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    isEmailVerified: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    residentOfBuildings: z
      .lazy(() => BuildingOrderByRelationAggregateInputObjectSchema)
      .optional(),
    adminOfBuildings: z
      .lazy(() => BuildingOrderByRelationAggregateInputObjectSchema)
      .optional(),
    creatorOfBuildings: z
      .lazy(() => BuildingOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Contributions: z
      .lazy(() => ContributionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Expenses: z
      .lazy(() => ExpenseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    InvitationsSent: z
      .lazy(() => InvitationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    InvitationsReceived: z
      .lazy(() => InvitationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
