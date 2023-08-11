import { z } from 'zod';
import { ContributionUpdateInputObjectSchema } from './objects/ContributionUpdateInput.schema';
import { ContributionUncheckedUpdateInputObjectSchema } from './objects/ContributionUncheckedUpdateInput.schema';
import { ContributionWhereUniqueInputObjectSchema } from './objects/ContributionWhereUniqueInput.schema';

export const ContributionUpdateOneSchema = z.object({
  data: z.union([
    ContributionUpdateInputObjectSchema,
    ContributionUncheckedUpdateInputObjectSchema,
  ]),
  where: ContributionWhereUniqueInputObjectSchema,
});
