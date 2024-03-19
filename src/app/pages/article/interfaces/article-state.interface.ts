import { ArticleInterface } from '../../global-feed/types/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  date: ArticleInterface | null;
}
