import { z } from 'zod';
import { ContributionUpdateManyMutationInputObjectSchema } from './objects/ContributionUpdateManyMutationInput.schema';
import { ContributionWhereInputObjectSchema } from './objects/ContributionWhereInput.schema';

export const ContributionUpdateManySchema = z.object({
  data: ContributionUpdateManyMutationInputObjectSchema,
  where: ContributionWhereInputObjectSchema.optional(),
});
