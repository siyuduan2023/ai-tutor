export interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
  }
  
  export interface DrinkModel  {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    isFavorite: boolean; 
    ingredients: Ingredient[];
  }