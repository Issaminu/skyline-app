import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAdminOfBuildingsInputObjectSchema } from './UserUpdateWithoutAdminOfBuildingsInput.schema';
import { UserUncheckedUpdateWithoutAdminOfBuildingsInputObjectSchema } from './UserUncheckedUpdateWithoutAdminOfBuildingsInput.schema';
import { UserCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateWithoutAdminOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutAdminOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutAdminOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutAdminOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedUpdateWithoutAdminOfBuildingsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutAdminOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema =
  Schema;
