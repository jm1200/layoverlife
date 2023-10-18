// Location-related attributes
interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  lat?: number;
  lng?: number;
}

// Basic entity with common attributes
interface BaseEntity {
  id: string;
  name: string;
  description?: string;
  img: string;
  address: Address;
}

export interface Hotel extends BaseEntity {
  gym: "basic" | "good" | "deluxe" | "none";
  pool: "indoor" | "outdoor" | "indoor and outdoor" | "none";
  rating?: number; // e.g., 4.5 for 4.5 stars
  priceRange?: string; // e.g., "$$" for moderate pricing
  wifi?: "free" | "paid" | "unknown";
  parking?: "free" | "paid" | "unknown";
  petsAllowed?: boolean;
  mapImg: string;
  restaurantsInHotel: Restaurant[];
  recommendedRestaurants: Restaurant[];
  attractions: Attraction[];
}

export interface Restaurant extends BaseEntity {
  cuisineType: string; // e.g., "Italian"
  linkToMenu: string;
  linkToWebsite: string;
  mapImg: string;
  mealTypes: string[]; // e.g., ["breakfast", "lunch", "dinner"]
  rating?: number;
  priceRange?: string;
}

export interface Attraction extends BaseEntity {
  linkToWebsite: string;
  mapImg: string;
  openingHours?: string; // e.g., "9am - 5pm"
  entranceFee?: string; // e.g., "$20 for adults"
}

// If you plan to include user reviews:
export interface Review {
  id: string;
  username: string;
  rating: number; // e.g., 4 for 4 stars
  comment: string;
  date: Date;
  entityId: string; // ID of the Hotel, Restaurant, or Attraction being reviewed
}
