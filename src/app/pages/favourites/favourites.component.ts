import { Component } from '@angular/core';
import { FormMovieComponent } from '../../components/form-movie/form-movie.component';
import { ItemMovieComponent } from '../../components/item-movie/item-movie.component';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [FormMovieComponent, ItemMovieComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

  movies: any[] = [
    { name: "Hulk", year: "1909" },
    { name: "Avengers", year: "2020" },
    { name: "Avengers fin de una era", year: "2020" }
  ]

  addNewMovie(movie: any) {
    this.movies.push(movie)
  }
}
