import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { EnumHouseStatusFieldUpdateOperationsInputObjectSchema } from './EnumHouseStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BuildingUpdateOneRequiredWithoutHousesNestedInputObjectSchema } from './BuildingUpdateOneRequiredWithoutHousesNestedInput.schema';
import { ContributionUpdateManyWithoutHouseNestedInputObjectSchema } from './ContributionUpdateManyWithoutHouseNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpdateWithoutInvitationsInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    size: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => HouseStatusSchema),
        z.lazy(() => EnumHouseStatusFieldUpdateOperationsInputObjectSchema),
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
    Building: z
      .lazy(() => BuildingUpdateOneRequiredWithoutHousesNestedInputObjectSchema)
      .optional(),
    Contributions: z
      .lazy(() => ContributionUpdateManyWithoutHouseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const HouseUpdateWithoutInvitationsInputObjectSchema = Schema;