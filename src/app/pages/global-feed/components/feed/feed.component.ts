import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { PushPipe } from '@ngrx/component';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { GetFeedResponseInterface } from './types/get-feed-response.interface';
import { getFeedAction } from './store/actions/get-feed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from './store/selectors';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html',
  styleUrl: 'feed.component.scss',
  standalone: true,
  imports: [PushPipe, AsyncPipe, NgIf, NgForOf, RouterLink],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps!: string;

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<GetFeedResponseInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.feed$ = this.store.select(feedSelector);
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
