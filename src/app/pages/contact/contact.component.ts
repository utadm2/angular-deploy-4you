import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  drinks: any[] = []

  constructor(private cs: CocktailService) { }

  ngOnInit(): void {
    this.cs.getCocktails().subscribe(data => {
      console.log(data)
      this.drinks = data.drinks
    })
  }
}
