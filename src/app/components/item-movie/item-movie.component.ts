import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  standalone: true,
  imports: [],
  templateUrl: './item-movie.component.html',
  styleUrl: './item-movie.component.css'
})
export class ItemMovieComponent {
  @Input() moviesInput: any[] = []
  @Output() watched = new EventEmitter<any>();

  updateMovie(id: string) {
    console.log(id)
    this.watched.emit({
      id: id,
      watched: true
    })
  }
}
