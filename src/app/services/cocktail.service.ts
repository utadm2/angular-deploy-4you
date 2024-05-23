import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktails() {
    return this.http.get<any>("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
  }
}
