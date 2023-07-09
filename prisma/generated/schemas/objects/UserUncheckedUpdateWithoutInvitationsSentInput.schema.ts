import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BuildingUncheckedUpdateManyWithoutResidentsNestedInputObjectSchema } from './BuildingUncheckedUpdateManyWithoutResidentsNestedInput.schema';
import { BuildingUncheckedUpdateManyWithoutAdminsNestedInputObjectSchema } from './BuildingUncheckedUpdateManyWithoutAdminsNestedInput.schema';
import { BuildingUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './BuildingUncheckedUpdateManyWithoutCreatorNestedInput.schema';
import { ContributionUncheckedUpdateManyWithoutContributorNestedInputObjectSchema } from './ContributionUncheckedUpdateManyWithoutContributorNestedInput.schema';
import { ExpenseUncheckedUpdateManyWithoutAdminNestedInputObjectSchema } from './ExpenseUncheckedUpdateManyWithoutAdminNestedInput.schema';
import { InvitationUncheckedUpdateManyWithoutReceiverNestedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutReceiverNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutInvitationsSentInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
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
        .lazy(
          () =>
            BuildingUncheckedUpdateManyWithoutResidentsNestedInputObjectSchema,
        )
        .optional(),
      adminOfBuildings: z
        .lazy(
          () => BuildingUncheckedUpdateManyWithoutAdminsNestedInputObjectSchema,
        )
        .optional(),
      creatorOfBuildings: z
        .lazy(
          () =>
            BuildingUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema,
        )
        .optional(),
      Contributions: z
        .lazy(
          () =>
            ContributionUncheckedUpdateManyWithoutContributorNestedInputObjectSchema,
        )
        .optional(),
      Expenses: z
        .lazy(
          () => ExpenseUncheckedUpdateManyWithoutAdminNestedInputObjectSchema,
        )
        .optional(),
      InvitationsReceived: z
        .lazy(
          () =>
            InvitationUncheckedUpdateManyWithoutReceiverNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema =
  Schema;
