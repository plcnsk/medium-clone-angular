import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrl: 'pagination.component.scss',
  standalone: true,
  providers: [UtilsService],
  imports: [NgForOf, RouterLink, NgClass],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps!: number | undefined;
  @Input('limit') limitProps!: number;
  @Input('currentPage') currentPageProps!: number;
  @Input('url') urlProps!: string;

  pagesCount!: number;
  pages!: number[];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    if (this.totalProps) {
      this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    }

    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}
