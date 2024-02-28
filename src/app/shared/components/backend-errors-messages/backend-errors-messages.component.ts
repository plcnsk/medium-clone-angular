import { Component, Input, OnInit } from '@angular/core';

import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-errors-messages',
  templateUrl: 'backend-errors-messages.component.html',
  styleUrl: 'backend-errors-messages.component.scss',
  standalone: true,
})
export class BackendErrorsMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | null;

  errorsMessages!: string[];

  ngOnInit(): void {
    if (this.backendErrorsProps) {
      this.errorsMessages = Object.keys(this.backendErrorsProps).map(
        (name: string) => {
          const messages = this.backendErrorsProps![name].join(', ');

          return `${name} ${messages}`;
        },
      );
    }
  }
}
