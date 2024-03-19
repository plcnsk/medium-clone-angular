import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GetArticleResponseInterface } from '../interfaces/get-article-response.interface';
import { ArticleInterface } from '../../pages/global-feed/types/article.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article;
      }),
    );
  }
}
