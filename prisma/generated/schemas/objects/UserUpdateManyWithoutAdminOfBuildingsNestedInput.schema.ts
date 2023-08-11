import { z } from 'zod';
import { UserCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateWithoutAdminOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutAdminOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutAdminOfBuildingsInput.schema';
import { UserCreateOrConnectWithoutAdminOfBuildingsInputObjectSchema } from './UserCreateOrConnectWithoutAdminOfBuildingsInput.schema';
import { UserUpsertWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutAdminOfBuildingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutAdminOfBuildingsInput.schema';
import { UserUpdateManyWithWhereWithoutAdminOfBuildingsInputObjectSchema } from './UserUpdateManyWithWhereWithoutAdminOfBuildingsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutAdminOfBuildingsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              UserUpsertWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpsertWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateWithWhereUniqueWithoutAdminOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              UserUpdateManyWithWhereWithoutAdminOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateManyWithWhereWithoutAdminOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateManyWithoutAdminOfBuildingsNestedInputObjectSchema =
  Schema;
