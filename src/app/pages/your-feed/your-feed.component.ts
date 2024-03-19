import { Component } from '@angular/core';

import { BannerComponent } from '../../shared/components/banner/banner.component';
import { PopularTagsComponent } from '../../shared/components/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../global-feed/components/feed-toggler/feed-toggler.component';
import { FeedComponent } from '../global-feed/components/feed/feed.component';

@Component({
  selector: 'app-your-feed',
  templateUrl: 'your-feed.component.html',
  styleUrl: 'your-feed.component.scss',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
    FeedTogglerComponent,
    FeedComponent,
  ],
})
export class YourFeedComponent {
  apiUrl = '/articles/feed';
}
