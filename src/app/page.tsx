"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import cards from "../../models/card.json";
import { Card } from "../../types";

const IMAGE_BASE_PATH = "/images";

export default function Home() {
  const router = useRouter();
  const [highlightIndex, setHighlightIndex] = useState(0);

  const previewCards: Card[] = cards.slice(0, 5);

  const handleCardClick = (cardId: number) => {
    router.push(`/gallery/${cardId}`);
  };

  return (
    <main className="flex justify-center w-full h-full">
      <ul className="flex gap-5 w-full h-full">
        {previewCards.map((card, index) => (
          <li
            className={`h-full overflow-hidden cursor-pointer ease-in-out duration-0 ${
              highlightIndex === index
                ? "brightness-100"
                : "flex-1 brightness-50"
            }`}
            onClick={() => handleCardClick(card.id)}
            onMouseEnter={() => setHighlightIndex(index)}
            key={card.id}
          >
            <Image
              src={(IMAGE_BASE_PATH + card.images.vertical) as string}
              alt={card.title + " preview"}
              className={`w-full h-full object-cover `}
              width={350}
              height={1000}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
