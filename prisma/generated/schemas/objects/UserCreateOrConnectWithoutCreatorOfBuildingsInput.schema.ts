import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateWithoutCreatorOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutCreatorOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCreatorOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutCreatorOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutCreatorOfBuildingsInputObjectSchema =
  Schema;
