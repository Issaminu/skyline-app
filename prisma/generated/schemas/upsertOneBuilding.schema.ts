import { z } from 'zod';
import { BuildingWhereUniqueInputObjectSchema } from './objects/BuildingWhereUniqueInput.schema';
import { BuildingCreateInputObjectSchema } from './objects/BuildingCreateInput.schema';
import { BuildingUncheckedCreateInputObjectSchema } from './objects/BuildingUncheckedCreateInput.schema';
import { BuildingUpdateInputObjectSchema } from './objects/BuildingUpdateInput.schema';
import { BuildingUncheckedUpdateInputObjectSchema } from './objects/BuildingUncheckedUpdateInput.schema';

export const BuildingUpsertSchema = z.object({
  where: BuildingWhereUniqueInputObjectSchema,
  create: z.union([
    BuildingCreateInputObjectSchema,
    BuildingUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BuildingUpdateInputObjectSchema,
    BuildingUncheckedUpdateInputObjectSchema,
  ]),
});
