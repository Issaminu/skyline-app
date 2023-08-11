import { z } from 'zod';
import { BuildingCreateNestedManyWithoutResidentsInputObjectSchema } from './BuildingCreateNestedManyWithoutResidentsInput.schema';
import { BuildingCreateNestedManyWithoutCreatorInputObjectSchema } from './BuildingCreateNestedManyWithoutCreatorInput.schema';
import { ContributionCreateNestedManyWithoutContributorInputObjectSchema } from './ContributionCreateNestedManyWithoutContributorInput.schema';
import { ExpenseCreateNestedManyWithoutAdminInputObjectSchema } from './ExpenseCreateNestedManyWithoutAdminInput.schema';
import { InvitationCreateNestedManyWithoutSenderInputObjectSchema } from './InvitationCreateNestedManyWithoutSenderInput.schema';
import { InvitationCreateNestedManyWithoutReceiverInputObjectSchema } from './InvitationCreateNestedManyWithoutReceiverInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutAdminOfBuildingsInput> = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    image: z.string(),
    isEmailVerified: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    residentOfBuildings: z
      .lazy(() => BuildingCreateNestedManyWithoutResidentsInputObjectSchema)
      .optional(),
    creatorOfBuildings: z
      .lazy(() => BuildingCreateNestedManyWithoutCreatorInputObjectSchema)
      .optional(),
    Contributions: z
      .lazy(
        () => ContributionCreateNestedManyWithoutContributorInputObjectSchema,
      )
      .optional(),
    Expenses: z
      .lazy(() => ExpenseCreateNestedManyWithoutAdminInputObjectSchema)
      .optional(),
    InvitationsSent: z
      .lazy(() => InvitationCreateNestedManyWithoutSenderInputObjectSchema)
      .optional(),
    InvitationsReceived: z
      .lazy(() => InvitationCreateNestedManyWithoutReceiverInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutAdminOfBuildingsInputObjectSchema = Schema;
