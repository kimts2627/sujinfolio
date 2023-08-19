"use client";

import Header from "@/app/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

import dummy1 from "public/images/dummy_1.jpeg";
import dummy2 from "public/images/dummy_2.jpeg";
import dummy3 from "public/images/dummy_3.jpeg";
import dummy4 from "public/images/dummy_4.jpeg";

export default function Home() {
  const router = useRouter();

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
    <main className="flex justify-center w-96 h-full">
      <ul className="flex gap-2 w-full h-full">
        {previewCards.map((card) => (
          <li
            className="flex-1 h-full overflow-hidden hover-animation cursor-pointer"
            onClick={() => handleCardClick(card.id)}
            key={card.id}
          >
            <Image
              src={card.src}
              alt={card.title + " preview"}
              className={`w-full h-full object-cover object-position-${card.id}`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
