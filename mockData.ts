import { Attraction, Hotel, Restaurant } from "./types";

const hotels: Hotel[] = [
  {
    id: "h1",
    name: "Grand Hyatt Downtown",
    description: "A luxurious hotel located in the heart of the city.",
    img: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagohilton.jpeg",
    address: {
      street: "123 City St",
      city: "Chicago",
      state: "IL",
      postalCode: "60007",
      country: "USA",
      lat: 41.8781,
      lng: -87.6298,
    },
    gym: "deluxe",
    pool: "indoor and outdoor",
    rating: 4.5,
    priceRange: "$$$",
    wifi: "free",
    parking: "paid",
    petsAllowed: true,
    mapImg: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagohilton.jpeg",
    restaurantsInHotel: [], // Will fill this after defining some restaurants
    recommendedRestaurants: [],
    attractions: [],
  },
  {
    id: "h2",
    name: "Hilton Airport",
    description: "Short stay airport.",
    img: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagoairport.jpeg",
    address: {
      street: "123 City St",
      city: "Chicago",
      state: "IL",
      postalCode: "60007",
      country: "USA",
      lat: 41.8781,
      lng: -87.6298,
    },
    gym: "deluxe",
    pool: "indoor and outdoor",
    rating: 4.5,
    priceRange: "$$$",
    wifi: "free",
    parking: "paid",
    petsAllowed: true,
    mapImg: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagohilton.jpeg",
    restaurantsInHotel: [], // Will fill this after defining some restaurants
    recommendedRestaurants: [],
    attractions: [],
  },
  // ... add more hotels as needed
];

const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "City Bistro",
    description:
      "A popular eatery offering a mix of traditional and modern dishes.",
    img: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagohilton.jpeg",
    address: {
      street: "456 Food Lane",
      city: "Chicago",
      state: "IL",
      postalCode: "60010",
      country: "USA",
      lat: 41.8839,
      lng: -87.6314,
    },
    cuisineType: "American",
    linkToMenu: "https://citybistro.com/menu",
    linkToWebsite: "https://citybistro.com",
    mapImg: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagohilton.jpeg",
    mealTypes: ["breakfast", "lunch", "dinner"],
    rating: 4.2,
    priceRange: "$$",
  },
  {
    id: "r2",
    name: "Airport restaurant",
    description: "Nice hotel restaurant.",
    img: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagoairport.jpeg",
    address: {
      street: "456 Food Lane",
      city: "Chicago",
      state: "IL",
      postalCode: "60010",
      country: "USA",
      lat: 41.8839,
      lng: -87.6314,
    },
    cuisineType: "American",
    linkToMenu: "https://citybistro.com/menu",
    linkToWebsite: "https://citybistro.com",
    mapImg:
      "https://layoverlife.s3.us-east-2.amazonaws.com/chicagoairport.jpeg",
    mealTypes: ["breakfast", "lunch", "dinner"],
    rating: 4.2,
    priceRange: "$$",
  },
  // ... add more restaurants as needed
];

const attractions: Attraction[] = [
  {
    id: "a1",
    name: "City Museum",
    description: "Explore the rich history and culture of the city.",
    img: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagohilton.jpeg",
    address: {
      street: "789 Museum Rd",
      city: "Chicago",
      state: "IL",
      postalCode: "60013",
      country: "USA",
      lat: 41.8919,
      lng: -87.6086,
    },
    linkToWebsite: "https://citymuseum.com",
    mapImg: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagohilton.jpeg",
    openingHours: "9am - 5pm",
    entranceFee: "$20 for adults",
  },
  {
    id: "a2",
    name: "airport attraction",
    description: "Airport attraction description.",
    img: "https://layoverlife.s3.us-east-2.amazonaws.com/chicagoairport.jpeg",
    address: {
      street: "789 Museum Rd",
      city: "Chicago",
      state: "IL",
      postalCode: "60013",
      country: "USA",
      lat: 41.8919,
      lng: -87.6086,
    },
    linkToWebsite: "https://citymuseum.com",
    mapImg:
      "https://layoverlife.s3.us-east-2.amazonaws.com/chicagoairport.jpeg",
    openingHours: "9am - 5pm",
    entranceFee: "$20 for adults",
  },
  // ... add more attractions as needed
];

// Now, let's populate the hotel's recommended restaurants and attractions
hotels[0].restaurantsInHotel.push(restaurants[0]);
hotels[0].recommendedRestaurants.push(restaurants[0]);
hotels[0].attractions.push(attractions[0]);

hotels[1].restaurantsInHotel.push(restaurants[1]);
hotels[1].recommendedRestaurants.push(restaurants[1]);
hotels[1].attractions.push(attractions[1]);

export default hotels;
