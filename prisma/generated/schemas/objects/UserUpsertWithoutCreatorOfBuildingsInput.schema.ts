import { z } from 'zod';
import { UserUpdateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUpdateWithoutCreatorOfBuildingsInput.schema';
import { UserUncheckedUpdateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorOfBuildingsInput.schema';
import { UserCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserCreateWithoutCreatorOfBuildingsInput.schema';
import { UserUncheckedCreateWithoutCreatorOfBuildingsInputObjectSchema } from './UserUncheckedCreateWithoutCreatorOfBuildingsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCreatorOfBuildingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCreatorOfBuildingsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutCreatorOfBuildingsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCreatorOfBuildingsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutCreatorOfBuildingsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutCreatorOfBuildingsInputObjectSchema = Schema;
