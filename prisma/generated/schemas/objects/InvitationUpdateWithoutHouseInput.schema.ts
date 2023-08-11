import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvitationsSentNestedInput.schema';
import { UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvitationsReceivedNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.InvitationUpdateWithoutHouseInput> = z
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
    receiver: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InvitationUpdateWithoutHouseInputObjectSchema = Schema;
