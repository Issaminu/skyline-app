import { z } from 'zod';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { BuildingCreateNestedOneWithoutHousesInputObjectSchema } from './BuildingCreateNestedOneWithoutHousesInput.schema';
import { ContributionCreateNestedManyWithoutHouseInputObjectSchema } from './ContributionCreateNestedManyWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateWithoutInvitationsInput> = z
  .object({
    name: z.string(),
    size: z.number(),
    status: z.lazy(() => HouseStatusSchema),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Building: z.lazy(
      () => BuildingCreateNestedOneWithoutHousesInputObjectSchema,
    ),
    Contributions: z
      .lazy(() => ContributionCreateNestedManyWithoutHouseInputObjectSchema)
      .optional(),
  })
  .strict();

export const HouseCreateWithoutInvitationsInputObjectSchema = Schema;
