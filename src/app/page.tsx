"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import dummy1 from "public/images/dummy_1.jpeg";
import dummy2 from "public/images/dummy_2.jpeg";
import dummy3 from "public/images/dummy_3.jpeg";
import dummy4 from "public/images/dummy_4.jpeg";

export default function Home() {
  const router = useRouter();
  const [highlightIndex, setHighlightIndex] = useState(0);

  const previewCards = [
    {
      id: 1,
      title: "mock",
      description: "mock mock",
      src: dummy1,
    },
    {
      id: 2,
      title: "mock",
      description: "mock mock",
      src: dummy2,
    },
    {
      id: 3,
      title: "mock",
      description: "mock mock",
      src: dummy3,
    },
    {
      id: 4,
      title: "mock",
      description: "mock mock",
      src: dummy4,
    },
  ];

  const handleCardClick = (cardId: number) => {
    router.push(`/gallery/${cardId}`);
  };

  return (
    <main className="flex justify-center w-full h-full">
      <ul className="flex gap-2 w-full h-full">
        {previewCards.map((card, index) => (
          <li
            className={`h-full overflow-hidden cursor-pointer ease-in-out duration-700 ${
              highlightIndex === index
                ? "brightness-100"
                : "flex-1 brightness-50"
            }`}
            onClick={() => handleCardClick(card.id)}
            onMouseEnter={() => setHighlightIndex(index)}
            key={card.id}
          >
            <Image
              src={card.src}
              alt={card.title + " preview"}
              className={`w-full h-full object-cover object-position-${card.id}`}
              objectFit="cover"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
