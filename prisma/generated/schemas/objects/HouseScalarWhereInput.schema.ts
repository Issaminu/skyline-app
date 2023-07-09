import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumHouseStatusFilterObjectSchema } from './EnumHouseStatusFilter.schema';
import { HouseStatusSchema } from '../enums/HouseStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.HouseScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => HouseScalarWhereInputObjectSchema),
        z.lazy(() => HouseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HouseScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HouseScalarWhereInputObjectSchema),
        z.lazy(() => HouseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    size: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumHouseStatusFilterObjectSchema),
        z.lazy(() => HouseStatusSchema),
      ])
      .optional(),
    buildingId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const HouseScalarWhereInputObjectSchema = Schema;
