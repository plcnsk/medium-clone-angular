import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'topBar.component.html',
  styleUrl: 'topBar.component.scss',
  imports: [RouterLink, AsyncPipe],
  standalone: true,
})
export class TopBarComponent {
  isLoggedIn$ = this.store.select(isLoggedInSelector);
  isAnonymous$ = this.store.select(isAnonymousSelector);
  currentUser$ = this.store.select(currentUserSelector);

  constructor(private store: Store) {}
}
