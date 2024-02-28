import { Component } from '@angular/core';

import { FeedComponent } from '../../../shared/components/feed/feed.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: 'global-feed.component.html',
  styleUrl: 'global-feed.component.scss',
  standalone: true,
  imports: [FeedComponent],
})
export class GlobalFeedComponent {}
