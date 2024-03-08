import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

import { PopularTagType } from '../../interfaces/popular-tag.type';

@Component({
  selector: 'app-tag-list',
  templateUrl: 'teg-list.component.html',
  standalone: true,
  imports: [NgForOf],
})
export class TegListComponent {
  @Input('tags') tagsProps: PopularTagType[] = [];
}
