import { z } from 'zod';
import { UserCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateWithoutResidentOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutResidentOfBuildingsInput.schema';
import { UserCreateOrConnectWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateOrConnectWithoutResidentOfBuildingsInput.schema';
import { UserUpsertWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutResidentOfBuildingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutResidentOfBuildingsInput.schema';
import { UserUpdateManyWithWhereWithoutResidentOfBuildingsInputObjectSchema } from './UserUpdateManyWithWhereWithoutResidentOfBuildingsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutResidentOfBuildingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutResidentOfBuildingsInputObjectSchema),
          z
            .lazy(() => UserCreateWithoutResidentOfBuildingsInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              UserCreateOrConnectWithoutResidentOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserCreateOrConnectWithoutResidentOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              UserUpsertWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpsertWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema,
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
              UserUpdateWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              UserUpdateManyWithWhereWithoutResidentOfBuildingsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateManyWithWhereWithoutResidentOfBuildingsInputObjectSchema,
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

export const UserUpdateManyWithoutResidentOfBuildingsNestedInputObjectSchema =
  Schema;
