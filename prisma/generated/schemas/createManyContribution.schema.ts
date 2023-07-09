import { z } from 'zod';
import { ContributionCreateManyInputObjectSchema } from './objects/ContributionCreateManyInput.schema';

export const ContributionCreateManySchema = z.object({
  data: z.union([
    ContributionCreateManyInputObjectSchema,
    z.array(ContributionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
