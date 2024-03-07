import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  templateUrl: 'teg-list.component.html',
  standalone: true,
  imports: [NgForOf],
})
export class TegListComponent {
  @Input('tags') tagsProps: string[] = [];
}
