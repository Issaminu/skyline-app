import { z } from 'zod';
import { ContributionCreateInputObjectSchema } from './objects/ContributionCreateInput.schema';
import { ContributionUncheckedCreateInputObjectSchema } from './objects/ContributionUncheckedCreateInput.schema';

export const ContributionCreateOneSchema = z.object({
  data: z.union([
    ContributionCreateInputObjectSchema,
    ContributionUncheckedCreateInputObjectSchema,
  ]),
});
