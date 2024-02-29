import { createReducer, on } from '@ngrx/store';

import { FeedStateInterface } from '../types/feed-state.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/get-feed.action';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  date: null,
};

export const feedReducer = createReducer(
  initialState,

  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),

  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      date: action.feed,
    }),
  ),

  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
);
