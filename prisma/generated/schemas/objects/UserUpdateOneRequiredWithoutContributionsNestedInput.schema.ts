import { z } from 'zod';
import { UserCreateWithoutContributionsInputObjectSchema } from './UserCreateWithoutContributionsInput.schema';
import { UserUncheckedCreateWithoutContributionsInputObjectSchema } from './UserUncheckedCreateWithoutContributionsInput.schema';
import { UserCreateOrConnectWithoutContributionsInputObjectSchema } from './UserCreateOrConnectWithoutContributionsInput.schema';
import { UserUpsertWithoutContributionsInputObjectSchema } from './UserUpsertWithoutContributionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutContributionsInputObjectSchema } from './UserUpdateWithoutContributionsInput.schema';
import { UserUncheckedUpdateWithoutContributionsInputObjectSchema } from './UserUncheckedUpdateWithoutContributionsInput.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutContributionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutContributionsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutContributionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutContributionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutContributionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutContributionsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutContributionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutContributionsNestedInputObjectSchema =
  Schema;
