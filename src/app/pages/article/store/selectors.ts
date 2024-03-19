import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ArticleStateInterface } from '../interfaces/article-state.interface';

export const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading,
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error,
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.date,
);
