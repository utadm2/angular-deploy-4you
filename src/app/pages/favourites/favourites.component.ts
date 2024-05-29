import { Component, OnInit } from '@angular/core';
import { FormMovieComponent } from '../../components/form-movie/form-movie.component';
import { ItemMovieComponent } from '../../components/item-movie/item-movie.component';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [FormMovieComponent, ItemMovieComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {

  movies: any[] = []

  ngOnInit(): void {
    this.movies = [
      { id: window.crypto.randomUUID(), name: "Hulk", year: "1909" },
      { id: window.crypto.randomUUID(), name: "Avengers", year: "2020" },
      { id: window.crypto.randomUUID(), name: "Avengers fin de una era", year: "2020" }
    ]
  }

  addNewMovie(movie: any) {
    movie.id = window.crypto.randomUUID()
    this.movies.push(movie)
  }

  setWatched(item: any) {
    const movie = this.movies.find((movie: any) => movie.id === item.id)
    movie.watched = item.watched
  }
}
