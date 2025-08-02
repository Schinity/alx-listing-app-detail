export interface CardProps {
    title: string;
    imageUrl: string;
    description: string;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }

export interface PropertyProps {
    name: string;
    description:string;
    address: {
      state: string;
      city: string;
      country: string;
    };
    reviews: {
      name: string;
      avatar: string;
      rating: number;
      comment: string;
    }[];
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    };
    image: string;
    discount?: string;
}
  