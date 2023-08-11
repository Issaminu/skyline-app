import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HouseUpdateManyWithoutBuildingNestedInputObjectSchema } from './HouseUpdateManyWithoutBuildingNestedInput.schema';
import { UserUpdateManyWithoutAdminOfBuildingsNestedInputObjectSchema } from './UserUpdateManyWithoutAdminOfBuildingsNestedInput.schema';
import { UserUpdateOneRequiredWithoutCreatorOfBuildingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreatorOfBuildingsNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.BuildingUpdateWithoutResidentsInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    city: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    address: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    surface: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    thumbnail: z
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
    houses: z
      .lazy(() => HouseUpdateManyWithoutBuildingNestedInputObjectSchema)
      .optional(),
    admins: z
      .lazy(() => UserUpdateManyWithoutAdminOfBuildingsNestedInputObjectSchema)
      .optional(),
    creator: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutCreatorOfBuildingsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BuildingUpdateWithoutResidentsInputObjectSchema = Schema;
