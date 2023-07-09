import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './objects/ContributionWhereUniqueInput.schema';

export const ContributionFindUniqueSchema = z.object({
  where: ContributionWhereUniqueInputObjectSchema,
});
