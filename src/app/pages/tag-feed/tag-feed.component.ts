import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FeedComponent } from '../global-feed/components/feed/feed.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../shared/components/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../global-feed/components/feed-toggler/feed-toggler.component';

@Component({
  selector: 'app-tag-feed',
  templateUrl: 'tag-feed.component.html',
  styleUrl: 'tag-feed.component.scss',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class TagFeedComponent implements OnInit {
  apiUrl!: string;
  tagName!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params?.['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
