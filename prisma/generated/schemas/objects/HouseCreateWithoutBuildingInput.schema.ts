import { z } from 'zod';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { ContributionCreateNestedManyWithoutHouseInputObjectSchema } from './ContributionCreateNestedManyWithoutHouseInput.schema';
import { InvitationCreateNestedManyWithoutHouseInputObjectSchema } from './InvitationCreateNestedManyWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateWithoutBuildingInput> = z
  .object({
    name: z.string(),
    size: z.number(),
    status: z.lazy(() => HouseStatusSchema),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Contributions: z
      .lazy(() => ContributionCreateNestedManyWithoutHouseInputObjectSchema)
      .optional(),
    Invitations: z
      .lazy(() => InvitationCreateNestedManyWithoutHouseInputObjectSchema)
      .optional(),
  })
  .strict();

export const HouseCreateWithoutBuildingInputObjectSchema = Schema;
