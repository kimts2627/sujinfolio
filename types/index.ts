export interface Card {
  id: number;
  title: string | string[];
  description: string;
  tags: string[];
  images?: CardImages;
  spineImages?: SpineCardImages;
}

type CardImages = {
  vertical?: string;
  thumnail: string | string[];
  normal: string | string[];
  full: string | string[];
};

type SpineCardImages = Record<string, string[]>;
