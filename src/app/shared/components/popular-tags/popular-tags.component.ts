import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PushPipe } from '@ngrx/component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { getPopularTagsAction } from './store/actions/get-popular-tags.action';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from './store/selectors';
import { PopularTagType } from '../../interfaces/popular-tag.type';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-popular-tags',
  templateUrl: 'popular-tags.component.html',
  styleUrl: 'popular-tags.component.scss',
  standalone: true,
  imports: [
    LoadingComponent,
    PushPipe,
    AsyncPipe,
    ErrorMessageComponent,
    NgForOf,
    RouterLink,
  ],
})
export class PopularTagsComponent implements OnInit {
  popularTags$!: Observable<PopularTagType[] | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.popularTags$ = this.store.select(popularTagsSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
