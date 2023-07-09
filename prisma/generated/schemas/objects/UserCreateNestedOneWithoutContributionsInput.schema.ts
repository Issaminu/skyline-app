import { z } from 'zod';
import { UserCreateWithoutContributionsInputObjectSchema } from './UserCreateWithoutContributionsInput.schema';
import { UserUncheckedCreateWithoutContributionsInputObjectSchema } from './UserUncheckedCreateWithoutContributionsInput.schema';
import { UserCreateOrConnectWithoutContributionsInputObjectSchema } from './UserCreateOrConnectWithoutContributionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutContributionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutContributionsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutContributionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutContributionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutContributionsInputObjectSchema = Schema;
