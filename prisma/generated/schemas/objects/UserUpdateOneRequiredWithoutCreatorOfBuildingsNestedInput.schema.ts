import { z } from 'zod';
import { UserCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateWithoutCreatorOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutCreatorOfBuildingsInput.schema';
import { UserCreateOrConnectWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateOrConnectWithoutCreatorOfBuildingsInput.schema';
import { UserUpsertWithoutCreatorOfBuildingsInputObjectSchema } from './UserUpsertWithoutCreatorOfBuildingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUpdateWithoutCreatorOfBuildingsInput.schema';
import { UserUncheckedUpdateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatorOfBuildingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCreatorOfBuildingsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutCreatorOfBuildingsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutCreatorOfBuildingsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCreatorOfBuildingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCreatorOfBuildingsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutCreatorOfBuildingsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCreatorOfBuildingsNestedInputObjectSchema =
  Schema;
