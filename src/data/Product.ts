export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    bidCount?: number;
    timeLeft?: string;
    shipping: string;
    condition: string;
    rating?: number;
    isFeatured?: boolean;
    isBuyNow?: boolean;
    isAuction?: boolean;
  }