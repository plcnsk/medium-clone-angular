import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective, PushPipe } from '@ngrx/component';

import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../pages/auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrl: 'top-bar.component.scss',
  imports: [RouterLink, AsyncPipe, PushPipe, LetDirective],
  standalone: true,
})
export class TopBarComponent {
  isLoggedIn$ = this.store.select(isLoggedInSelector);
  isAnonymous$ = this.store.select(isAnonymousSelector);
  currentUser$ = this.store.select(currentUserSelector);

  constructor(private store: Store) {}
}
