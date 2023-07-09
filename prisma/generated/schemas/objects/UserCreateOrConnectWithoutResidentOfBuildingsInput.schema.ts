import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateWithoutResidentOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutResidentOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutResidentOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutResidentOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutResidentOfBuildingsInputObjectSchema =
  Schema;
