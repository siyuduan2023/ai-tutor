import { DrinkModel } from './models';

export const MOCK_DRINKS: DrinkModel[] = [
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
  {
    id: 3,
    name: 'Margarita',
    description: 'A classic tequila cocktail.',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1678481246021-25167a9599f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TWFyZ2FyaXRhfGVufDB8fDB8fHww',
    isFavorite: true,
    ingredients: [
      { name: 'Tequila', quantity: 2, unit: 'oz' },
      { name: 'Lime Juice', quantity: 1, unit: 'oz' },
      { name: 'Cointreau', quantity: 1, unit: 'oz' },
      { name: 'Salt', quantity: 1, unit: 'for rim' },
    ],
  },
  {
    id: 4,
    name: 'Negroni',
    description: 'A popular Italian cocktail, considered an apéritif.',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1694825175387-19fd6e521e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE5lZ3Jvbml8ZW58MHx8MHx8fDA%3D',
    isFavorite: false,
    ingredients: [
      { name: 'Gin', quantity: 1, unit: 'oz' },
      { name: 'Campari', quantity: 1, unit: 'oz' },
      { name: 'Sweet Vermouth', quantity: 1, unit: 'oz' },
      { name: 'Orange Peel', quantity: 1, unit: 'garnish' },
    ],
  },
  {
    id: 5,
    name: 'Cosmopolitan',
    description: 'A popular party drink.',
    imgUrl: 'https://media.istockphoto.com/id/118869665/photo/cocktails-cosmopolitan.webp?a=1&b=1&s=612x612&w=0&k=20&c=OvPFtWnuUFzA3N0c_MczKlWpU4FUhLqNz-s5K93z74Q=',
    isFavorite: false,
    ingredients: [
      { name: 'Vodka', quantity: 1.5, unit: 'oz' },
      { name: 'Cointreau', quantity: 1, unit: 'oz' },
      { name: 'Lime Juice', quantity: 0.5, unit: 'oz' },
      { name: 'Cranberry Juice', quantity: 1, unit: 'oz' },
    ],
  },
];
