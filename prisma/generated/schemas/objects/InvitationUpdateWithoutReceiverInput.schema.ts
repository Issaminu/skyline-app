import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvitationsSentNestedInput.schema';
import { HouseUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema } from './HouseUpdateOneRequiredWithoutInvitationsNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateWithoutReceiverInput> = z
  .object({
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
    sender: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema,
      )
      .optional(),
    house: z
      .lazy(
        () => HouseUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InvitationUpdateWithoutReceiverInputObjectSchema = Schema;
