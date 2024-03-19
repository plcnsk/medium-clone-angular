import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { ArticleStateInterface } from '../interfaces/article-state.interface';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/get-article.action';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  date: null,
};

export const articleReducer = createReducer(
  initialState,

  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),

  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      date: action.article,
    }),
  ),

  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(routerNavigationAction, (): ArticleStateInterface => initialState),
);
