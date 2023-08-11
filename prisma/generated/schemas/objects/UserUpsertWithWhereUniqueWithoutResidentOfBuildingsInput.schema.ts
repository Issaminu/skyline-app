import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutResidentOfBuildingsInputObjectSchema } from './UserUpdateWithoutResidentOfBuildingsInput.schema';
import { UserUncheckedUpdateWithoutResidentOfBuildingsInputObjectSchema } from './UserUncheckedUpdateWithoutResidentOfBuildingsInput.schema';
import { UserCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserCreateWithoutResidentOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutResidentOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutResidentOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutResidentOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedUpdateWithoutResidentOfBuildingsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutResidentOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutResidentOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema =
  Schema;
