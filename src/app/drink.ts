import { Injectable } from '@angular/core';
import { MOCK_DRINKS } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class Drink {
  public getDrinks() {
    return MOCK_DRINKS;
  }

  public getDrinkById(ID: number) {
    return MOCK_DRINKS.find(drink => drink.id === ID);
  }

  public addDrink(drinkData: {name: string, description: string}): void {
    const maxId = MOCK_DRINKS.reduce((max, drink) => (drink.id > max ? drink.id : max), 0);

    const newDrink = {
      id: maxId + 1, // Generate a new ID
      name: drinkData.name,
      description: drinkData.description,
      imgUrl: 'https://via.placeholder.com/300x200.png?text=New+Drink', // A default image
      isFavorite: false, // Default favorite status
      ingredients: [], // Default to an empty ingredients list
    };

    MOCK_DRINKS.push(newDrink);
  }

  
}
