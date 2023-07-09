import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './objects/ContributionWhereUniqueInput.schema';
import { ContributionCreateInputObjectSchema } from './objects/ContributionCreateInput.schema';
import { ContributionUncheckedCreateInputObjectSchema } from './objects/ContributionUncheckedCreateInput.schema';
import { ContributionUpdateInputObjectSchema } from './objects/ContributionUpdateInput.schema';
import { ContributionUncheckedUpdateInputObjectSchema } from './objects/ContributionUncheckedUpdateInput.schema';

export const ContributionUpsertSchema = z.object({
  where: ContributionWhereUniqueInputObjectSchema,
  create: z.union([
    ContributionCreateInputObjectSchema,
    ContributionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ContributionUpdateInputObjectSchema,
    ContributionUncheckedUpdateInputObjectSchema,
  ]),
});
