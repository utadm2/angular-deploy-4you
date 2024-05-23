import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  standalone: true,
  imports: [],
  templateUrl: './item-movie.component.html',
  styleUrl: './item-movie.component.css'
})
export class ItemMovieComponent {
  @Input() movieInput: any
}
