import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutContributionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutContributionsNestedInput.schema';
import { HouseUpdateOneRequiredWithoutContributionsNestedInputObjectSchema } from './HouseUpdateOneRequiredWithoutContributionsNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ContributionUpdateInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
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
    contributor: z
      .lazy(
        () => UserUpdateOneRequiredWithoutContributionsNestedInputObjectSchema,
      )
      .optional(),
    house: z
      .lazy(
        () => HouseUpdateOneRequiredWithoutContributionsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ContributionUpdateInputObjectSchema = Schema;
