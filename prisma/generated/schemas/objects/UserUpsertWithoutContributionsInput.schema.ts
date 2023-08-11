import { z } from 'zod';
import { UserUpdateWithoutContributionsInputObjectSchema } from './UserUpdateWithoutContributionsInput.schema';
import { UserUncheckedUpdateWithoutContributionsInputObjectSchema } from './UserUncheckedUpdateWithoutContributionsInput.schema';
import { UserCreateWithoutContributionsInputObjectSchema } from './UserCreateWithoutContributionsInput.schema';
import { UserUncheckedCreateWithoutContributionsInputObjectSchema } from './UserUncheckedCreateWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutContributionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutContributionsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutContributionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutContributionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutContributionsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutContributionsInputObjectSchema = Schema;
