import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { EnumHouseStatusFieldUpdateOperationsInputObjectSchema } from './EnumHouseStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContributionUpdateManyWithoutHouseNestedInputObjectSchema } from './ContributionUpdateManyWithoutHouseNestedInput.schema';
import { InvitationUpdateManyWithoutHouseNestedInputObjectSchema } from './InvitationUpdateManyWithoutHouseNestedInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUpdateWithoutBuildingInput> = z
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
    Contributions: z
      .lazy(() => ContributionUpdateManyWithoutHouseNestedInputObjectSchema)
      .optional(),
    Invitations: z
      .lazy(() => InvitationUpdateManyWithoutHouseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const HouseUpdateWithoutBuildingInputObjectSchema = Schema;
