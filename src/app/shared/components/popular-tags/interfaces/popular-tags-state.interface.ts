import { PopularTagType } from '../../../interfaces/popular-tag.type';

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}
