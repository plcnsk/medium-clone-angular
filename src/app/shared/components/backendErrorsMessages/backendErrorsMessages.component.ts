import { Component, Input, OnInit } from '@angular/core';

import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-errors-messages',
  templateUrl: 'backendErrorsMessages.component.html',
  styleUrl: 'backendErrorsMessages.component.scss',
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
