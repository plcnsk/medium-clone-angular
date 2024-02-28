import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { TopBarComponent } from './core/components/top-bar/top-bar.component';
import { getCurrentUserAction } from './auth/store/actions/get-current-user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, TopBarComponent],
  standalone: true,
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
