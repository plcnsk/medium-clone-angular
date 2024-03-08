import { Component } from '@angular/core';

import { FeedComponent } from './components/feed/feed.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../shared/components/popular-tags/popular-tags.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: 'global-feed.component.html',
  styleUrl: 'global-feed.component.scss',
  standalone: true,
  imports: [FeedComponent, BannerComponent, PopularTagsComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
