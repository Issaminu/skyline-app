import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateWithoutAdminOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutAdminOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAdminOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAdminOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutAdminOfBuildingsInputObjectSchema =
  Schema;
