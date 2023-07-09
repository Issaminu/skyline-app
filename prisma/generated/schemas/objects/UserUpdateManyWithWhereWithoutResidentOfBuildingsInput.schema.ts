import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutResidentsInputObjectSchema } from './UserUncheckedUpdateManyWithoutResidentsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutResidentOfBuildingsInput> =
  z
    .object({
      where: z.lazy(() => UserScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateManyMutationInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateManyWithoutResidentsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateManyWithWhereWithoutResidentOfBuildingsInputObjectSchema =
  Schema;
