import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutAdminsInputObjectSchema } from './UserUncheckedUpdateManyWithoutAdminsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutAdminOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateManyMutationInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateManyWithoutAdminsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateManyWithWhereWithoutAdminOfBuildingsInputObjectSchema =
  Schema;
