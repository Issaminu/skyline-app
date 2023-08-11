import { z } from 'zod';
import { BuildingUncheckedCreateNestedManyWithoutResidentsInputObjectSchema } from './BuildingUncheckedCreateNestedManyWithoutResidentsInput.schema';
import { BuildingUncheckedCreateNestedManyWithoutAdminsInputObjectSchema } from './BuildingUncheckedCreateNestedManyWithoutAdminsInput.schema';
import { BuildingUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './BuildingUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { ContributionUncheckedCreateNestedManyWithoutContributorInputObjectSchema } from './ContributionUncheckedCreateNestedManyWithoutContributorInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutSenderInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutReceiverInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutReceiverInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutExpensesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    image: z.string(),
    isEmailVerified: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    residentOfBuildings: z
      .lazy(
        () =>
          BuildingUncheckedCreateNestedManyWithoutResidentsInputObjectSchema,
      )
      .optional(),
    adminOfBuildings: z
      .lazy(
        () => BuildingUncheckedCreateNestedManyWithoutAdminsInputObjectSchema,
      )
      .optional(),
    creatorOfBuildings: z
      .lazy(
        () => BuildingUncheckedCreateNestedManyWithoutCreatorInputObjectSchema,
      )
      .optional(),
    Contributions: z
      .lazy(
        () =>
          ContributionUncheckedCreateNestedManyWithoutContributorInputObjectSchema,
      )
      .optional(),
    InvitationsSent: z
      .lazy(
        () => InvitationUncheckedCreateNestedManyWithoutSenderInputObjectSchema,
      )
      .optional(),
    InvitationsReceived: z
      .lazy(
        () =>
          InvitationUncheckedCreateNestedManyWithoutReceiverInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutExpensesInputObjectSchema = Schema;
