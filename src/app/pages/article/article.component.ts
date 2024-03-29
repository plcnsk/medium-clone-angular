import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { PushPipe } from '@ngrx/component';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import queryString from 'query-string';

import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from './store/selectors';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { TegListComponent } from '../../shared/components/tag-list/teg-list.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrl: 'article.component.scss',
  standalone: true,
  imports: [
    PushPipe,
    AsyncPipe,
    NgIf,
    NgForOf,
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TegListComponent,
  ],
})
export class ArticleComponent implements OnInit, OnChanges, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string;

  limit = environment.limit;
  baseUrl!: string;
  queryParamsSubscription!: Subscription;
  currentPage!: number;

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<GetFeedResponseInterface | null>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes?.['apiUrlProps'].firstChange &&
      changes?.['apiUrlProps'].currentValue !==
        changes?.['apiUrlProps'].previousValue;

    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.feed$ = this.store.select(feedSelector);

    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        const typedParams = params as ParamsInterface;

        this.currentPage = Number(
          (typedParams?.page as ParamsInterface) || '1',
        );

        this.fetchFeed();
      },
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(getArticlesAction({ url: apiUrlWithParams }));
  }
}
