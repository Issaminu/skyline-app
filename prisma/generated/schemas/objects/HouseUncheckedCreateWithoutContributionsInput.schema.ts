import { z } from 'zod';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { InvitationUncheckedCreateNestedManyWithoutHouseInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutHouseInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseUncheckedCreateWithoutContributionsInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      size: z.number(),
      status: z.lazy(() => HouseStatusSchema),
      buildingId: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Invitations: z
        .lazy(
          () =>
            InvitationUncheckedCreateNestedManyWithoutHouseInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const HouseUncheckedCreateWithoutContributionsInputObjectSchema = Schema;
