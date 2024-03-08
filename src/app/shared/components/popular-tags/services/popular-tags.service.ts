import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { PopularTagType } from '../../../interfaces/popular-tag.type';
import { environment } from '../../../../../environments/environment';
import { GetPopularTagsResponseInterface } from '../interfaces/get-popular-tags-response.interface';

@Injectable()
export class PopularTagsService {
  constructor(private readonly http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get<GetPopularTagsResponseInterface>(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      }),
    );
  }
}
