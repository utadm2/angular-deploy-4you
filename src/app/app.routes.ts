import { Routes } from '@angular/router';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: "", component: FavouritesComponent },
    { path: "contact", component: ContactComponent },
];
