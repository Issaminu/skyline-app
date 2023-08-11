import { z } from 'zod';
import { UserCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateWithoutCreatorOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutCreatorOfBuildingsInput.schema';
import { UserCreateOrConnectWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateOrConnectWithoutCreatorOfBuildingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorOfBuildingsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCreatorOfBuildingsInputObjectSchema =
  Schema;
