import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BuildingUpdateManyWithoutResidentsNestedInputObjectSchema } from './BuildingUpdateManyWithoutResidentsNestedInput.schema';
import { BuildingUpdateManyWithoutAdminsNestedInputObjectSchema } from './BuildingUpdateManyWithoutAdminsNestedInput.schema';
import { BuildingUpdateManyWithoutCreatorNestedInputObjectSchema } from './BuildingUpdateManyWithoutCreatorNestedInput.schema';
import { ContributionUpdateManyWithoutContributorNestedInputObjectSchema } from './ContributionUpdateManyWithoutContributorNestedInput.schema';
import { ExpenseUpdateManyWithoutAdminNestedInputObjectSchema } from './ExpenseUpdateManyWithoutAdminNestedInput.schema';
import { InvitationUpdateManyWithoutReceiverNestedInputObjectSchema } from './InvitationUpdateManyWithoutReceiverNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutInvitationsSentInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isEmailVerified: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    residentOfBuildings: z
      .lazy(() => BuildingUpdateManyWithoutResidentsNestedInputObjectSchema)
      .optional(),
    adminOfBuildings: z
      .lazy(() => BuildingUpdateManyWithoutAdminsNestedInputObjectSchema)
      .optional(),
    creatorOfBuildings: z
      .lazy(() => BuildingUpdateManyWithoutCreatorNestedInputObjectSchema)
      .optional(),
    Contributions: z
      .lazy(
        () => ContributionUpdateManyWithoutContributorNestedInputObjectSchema,
      )
      .optional(),
    Expenses: z
      .lazy(() => ExpenseUpdateManyWithoutAdminNestedInputObjectSchema)
      .optional(),
    InvitationsReceived: z
      .lazy(() => InvitationUpdateManyWithoutReceiverNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutInvitationsSentInputObjectSchema = Schema;
