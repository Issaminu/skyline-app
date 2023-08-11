import { z } from 'zod';
import { UserCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateWithoutResidentOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutResidentOfBuildingsInput.schema';
import { UserCreateOrConnectWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateOrConnectWithoutResidentOfBuildingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutResidentOfBuildingsInput> =
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
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutResidentOfBuildingsInputObjectSchema =
  Schema;
