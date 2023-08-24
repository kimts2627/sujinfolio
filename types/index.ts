export interface Card {
  id: number;
  title: string | string[];
  description: string;
  tags: string[];
  images: CardImages;
}

type CardImages = {
  vertical?: string;
  thumnail: string;
  normal: string;
  full: string;
};
