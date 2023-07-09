import { z } from 'zod';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { BuildingCreateNestedOneWithoutHousesInputObjectSchema } from './BuildingCreateNestedOneWithoutHousesInput.schema';
import { InvitationCreateNestedManyWithoutHouseInputObjectSchema } from './InvitationCreateNestedManyWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseCreateWithoutContributionsInput> = z
  .object({
    name: z.string(),
    size: z.number(),
    status: z.lazy(() => HouseStatusSchema),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Building: z.lazy(
      () => BuildingCreateNestedOneWithoutHousesInputObjectSchema,
    ),
    Invitations: z
      .lazy(() => InvitationCreateNestedManyWithoutHouseInputObjectSchema)
      .optional(),
  })
  .strict();

export const HouseCreateWithoutContributionsInputObjectSchema = Schema;
