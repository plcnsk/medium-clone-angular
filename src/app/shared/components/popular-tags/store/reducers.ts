import { createReducer, on } from '@ngrx/store';

import { PopularTagsStateInterface } from '../interfaces/popular-tags-state.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/get-popular-tags.action';
import { PopularTagType } from '../../../interfaces/popular-tag.type';

const initializeState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false,
};

export const popularTagsReducer = createReducer(
  initializeState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),

  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    }),
  ),

  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
);
