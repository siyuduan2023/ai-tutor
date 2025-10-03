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
}
