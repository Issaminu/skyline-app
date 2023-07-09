import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAdminOfBuildingsInputObjectSchema } from './UserUpdateWithoutAdminOfBuildingsInput.schema';
import { UserUncheckedUpdateWithoutAdminOfBuildingsInputObjectSchema } from './UserUncheckedUpdateWithoutAdminOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutAdminOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutAdminOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedUpdateWithoutAdminOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema =
  Schema;
