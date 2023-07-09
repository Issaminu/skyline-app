import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutContributionsInputObjectSchema } from './UserCreateWithoutContributionsInput.schema';
import { UserUncheckedCreateWithoutContributionsInputObjectSchema } from './UserUncheckedCreateWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutContributionsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutContributionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutContributionsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutContributionsInputObjectSchema = Schema;
