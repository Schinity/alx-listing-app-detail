export const SITE_TITLE = 'ALX Listing App';
export const API_BASE_URL = 'https://api.example.com';
export const DEFAULT_PLACEHOLDER_IMAGE = '/assets/placeholder.jpg';

import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    image: "https://example.com/image1.jpg",
    description: "Spacious apartment located in the heart of the city.",
    price: 3200,
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    address: {
      state:"enugu",
      city: "Bali",
      country: "Indonesia"
    },
    offers: {
      
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Jane Doe",
        avatar: "/images/avatar1.jpg",
        rating: 5,
        comment: "Incredible view and quiet neighborhood!"
      }
    ]
  },
  {
    name: "Mountain Escape Chalet",
    image: "https://example.com/image2.jpg",
    description: "A cozy chalet in the heart of the mountains.",
    price: 1800,
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    address: {
      state: "london",
      city: "Colorado",
      country: "USA"
    },
    offers: {
      
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "John Snow",
        avatar: "/images/avatar2.jpg",
        rating: 4,
        comment: "Perfect spot for a winter getaway."
      }
    ]
  },
  {
    name: "Cozy Desert Retreat",
    image: "https://example.com/image3.jpg",
    description: "A peaceful escape in the desert.",
    price: 1500,
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    address: {
      state: "mia",
      city: "California",
      country: "USA"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Alice Smith",
        avatar: "/images/avatar3.jpg",
        rating: 5,
        comment: "Loved the sunsets and privacy!"
      }
    ]
  },
  {
    name: "City Lights Penthouse",
    image: "https://example.com/image4.jpg",
    description: "Luxury penthouse with skyline views.",
    price: 4500,
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    address: {
      state:"Egro",
      city: "New York",
      country: "USA"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Tom Rivers",
        avatar: "/images/avatar4.jpg",
        rating: 4,
        comment: "Best location in the city!"
      }
    ]
  },
  {
    name: "Riverside Cabin",
    image: "https://example.com/image5.jpg",
    description: "Cabin by the river with private dock.",
    price: 2800,
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    address: {
      state:"Otago",
      city: "Otago",
      country: "New Zealand"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Sophie Clark",
        avatar: "/images/avatar5.jpg",
        rating: 5,
        comment: "Serene and well-equipped."
      }
    ]
  },
  {
    name: "Modern Beachfront Villa",
    image: "https://example.com/image6.jpg",
    description: "Luxury villa with beach access and private pool.",
    price: 5000,
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    address: {
      state:"bali",
      city: "Bali",
      country: "Indonesia"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Daniel Lee",
        avatar: "/images/avatar6.jpg",
        rating: 5,
        comment: "Private chef was amazing!"
      }
    ]
  },
  {
    name: "Lakeside Chalet",
    image: "https://example.com/image7.jpg",
    description: "Chalet beside the lake with beautiful views.",
    price: 2300,
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    address: {
      state: "Alberta",
      city: "Alberta",
      country: "Canada"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Kim Tran",
        avatar: "/images/avatar7.jpg",
        rating: 4,
        comment: "Peaceful place to unwind."
      }
    ]
  },
  {
    name: "Tropical Garden Villa",
    image: "https://example.com/image8.jpg",
    description: "Lush tropical gardens and a tranquil atmosphere.",
    price: 2750,
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    address: {
      state: "surat",
      city: "Surat Thani",
      country: "Thailand"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Emma Grace",
        avatar: "/images/avatar8.jpg",
        rating: 5,
        comment: "Great spot with nature all around!"
      }
    ]
  },
  {
    name: "Urban Loft",
    image: "https://example.com/image9.jpg",
    description: "Stylish loft located in the city center.",
    price: 2000,
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Lucas Schmidt",
        avatar: "/images/avatar9.jpg",
        rating: 4,
        comment: "Trendy and comfortable."
      }
    ]
  },
  {
    name: "Secluded Forest Cabin",
    image: "https://example.com/image10.jpg",
    description: "Hideaway in the forest with hot tub.",
    price: 2600,
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    address: {
      state: "British",
      city: "British Columbia",
      country: "Canada"
    },
    offers: {
      bed: "yes",
      shower: "yes",
      occupants: "no",  
  },
    reviews: [
      {
        name: "Grace Lin",
        avatar: "/images/avatar10.jpg",
        rating: 5,
        comment: "Great getaway from the city."
      }
    ]
  }
];