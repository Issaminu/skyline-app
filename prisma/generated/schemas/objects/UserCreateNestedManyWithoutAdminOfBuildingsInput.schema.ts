import { z } from 'zod';
import { UserCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateWithoutAdminOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutAdminOfBuildingsInput.schema';
import { UserCreateOrConnectWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateOrConnectWithoutAdminOfBuildingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutAdminOfBuildingsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAdminOfBuildingsInputObjectSchema),
          z
            .lazy(() => UserCreateWithoutAdminOfBuildingsInputObjectSchema)
            .array(),
          z.lazy(
            () => UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserCreateOrConnectWithoutAdminOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserCreateOrConnectWithoutAdminOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedManyWithoutAdminOfBuildingsInputObjectSchema =
  Schema;
