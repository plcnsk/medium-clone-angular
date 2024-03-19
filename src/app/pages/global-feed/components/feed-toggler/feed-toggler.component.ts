import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

import { isLoggedInSelector } from '../../../auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: 'feed-toggler.component.html',
  styleUrl: 'feed-toggler.component.scss',
  standalone: true,
  imports: [NgIf, AsyncPipe, RouterLink, RouterLinkActive],
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps!: string | null;

  isLoggedIn$!: Observable<boolean | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
  }
}
