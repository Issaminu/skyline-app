import { z } from 'zod';
import { ContributionWhereUniqueInputObjectSchema } from './objects/ContributionWhereUniqueInput.schema';

export const ContributionDeleteOneSchema = z.object({
  where: ContributionWhereUniqueInputObjectSchema,
});
