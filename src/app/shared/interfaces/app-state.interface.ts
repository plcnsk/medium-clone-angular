import { AuthStateInterface } from '../../pages/auth/types/auth-state.interface';
import { FeedStateInterface } from '../../pages/global-feed/components/feed/types/feed-state.interface';
import { PopularTagsStateInterface } from '../components/popular-tags/interfaces/popular-tags-state.interface';
import { ArticleStateInterface } from '../../pages/article/interfaces/article-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
}
