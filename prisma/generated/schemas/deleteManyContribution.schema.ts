import { z } from 'zod';
import { ContributionWhereInputObjectSchema } from './objects/ContributionWhereInput.schema';

export const ContributionDeleteManySchema = z.object({
  where: ContributionWhereInputObjectSchema.optional(),
});
