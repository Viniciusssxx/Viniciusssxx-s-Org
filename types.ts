
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}
