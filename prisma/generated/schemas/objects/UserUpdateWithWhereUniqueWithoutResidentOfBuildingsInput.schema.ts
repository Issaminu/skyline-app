import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutResidentOfBuildingsInputObjectSchema } from './UserUpdateWithoutResidentOfBuildingsInput.schema';
import { UserUncheckedUpdateWithoutResidentOfBuildingsInputObjectSchema } from './UserUncheckedUpdateWithoutResidentOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutResidentOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutResidentOfBuildingsInputObjectSchema),
        z.lazy(
          () => UserUncheckedUpdateWithoutResidentOfBuildingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutResidentOfBuildingsInputObjectSchema =
  Schema;
