import { DrinkModel  } from './models';

export const MOCK_DRINKS: DrinkModel [] = [
  {
    id: 1,
    name: 'Mojito',
    description: 'A refreshing Cuban highball.',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1721025986183-c33686ecf4d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavorite: true,
    ingredients: [
      { name: 'White Rum', quantity: 2, unit: 'oz' },
      { name: 'Lime Juice', quantity: 1, unit: 'oz' },
      { name: 'Sugar', quantity: 2, unit: 'tsp' },
      { name: 'Mint Leaves', quantity: 6, unit: 'each' },
      { name: 'Soda Water', quantity: 4, unit: 'oz' },
    ],
  },
  {
    id: 2,
    name: 'Old Fashioned',
    description: 'A classic cocktail of whiskey, bitters, sugar, and water.',
    imgUrl: 'https://images.unsplash.com/photo-1621873495884-845a939892d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavorite: false,
    ingredients: [
      { name: 'Bourbon or Rye Whiskey', quantity: 2, unit: 'oz' },
      { name: 'Angostura Bitters', quantity: 2, unit: 'dashes' },
      { name: 'Sugar Cube', quantity: 1, unit: 'each' },
      { name: 'Orange Peel', quantity: 1, unit: 'twist' },
    ],
  },
];
