import { Fragment } from "react";
import GalleryCard from "./components/GalleryCard";

import cards from '../../../models/card.json'
import { Card } from "../../../types";

export default function Gallery() {
  const cardList = cards as Card[]
  return (
    <main className="flex flex-1 flex-col w-full transltion group-hover:ease-in-out duration-100">
      {cardList.map((card, index) => (
        <Fragment key={index}>
          <div className="h-px w-full bg-black" />
          <GalleryCard card={card} />
        </Fragment>
      ))}
      <div className="h-px w-full bg-black" />
    </main>
  );
}
