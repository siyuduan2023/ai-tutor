import { Component, computed, signal, inject } from '@angular/core';
import { Drink } from '../drink';
import { DrinkModel } from '../models';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drink-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './drink-list.html',
  styleUrl: './drink-list.css'
})
export class DrinkList {
  protected readonly drinkService = inject(Drink);

  protected drink = signal<DrinkModel>({} as DrinkModel);
  protected searchTerm = signal('');
  protected filteredDrinks = computed(() => {
    const searchText = this.searchTerm().toLowerCase();
    
    if (!searchText) {
      return this.drinkService.getDrinks();
    }
    
    return this.drinkService.getDrinks().filter(drink => {
      return drink.name.toLowerCase().includes(searchText);
    })
  });

}
