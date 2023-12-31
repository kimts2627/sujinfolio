"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { RxEnter } from "react-icons/rx";

import { Card } from "../../../../types";

type GalleryCardProps = {
  card: Card;
};

const IMAGE_BASE_PATH = "/images";
const SPINE_IMAGE_BASE_PATH = "/images/spine";

const GalleryCard = ({ card }: GalleryCardProps) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  // TODO: 동적으로 판별 하도록 수정
  const isSpineProject = card.id === 7;

  const cardTitle = typeof card.title === "string" ? card.title : card.title[1];

  const thumnailImage =
    typeof card?.images?.thumnail === "string"
      ? [IMAGE_BASE_PATH + card?.images.thumnail ?? ""]
      : card?.images?.thumnail.map(
          (imagePath) => IMAGE_BASE_PATH + imagePath
        ) ?? [];

  const spineThumnail = [SPINE_IMAGE_BASE_PATH + "/elephant/walk.gif"];

  console.log(isSpineProject ? spineThumnail : thumnailImage);

  const tagText = card.tags.join(" | ");

  const handleCardClick = () => {
    router.push(`/gallery/${card.id}`);
  };

  return (
    <article
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleCardClick}
      className="flex gap-10 justify-between px-6 py-4 w-full h-96 cursor-pointer hover:bg-gray-500 hover:text-white ease-in-out duration-200"
    >
      <div className="flex flex-col justify-between flex-1 py-2 font-extralight">
        <div className="flex flex-col gap-5">
          <h2 className={`text-5xl ${!isHover && "text-primary"}`}>
            {cardTitle}
          </h2>
          <p className="ellipsis-text" lang="ko">
            {card.description}
          </p>
          <div
            className={`flex flex-col gap-3 ${
              isHover ? "w-3/5" : "w-1/2"
            } ease-in-out duration-100`}
          >
            <div
              className={`h-2px w-full ${isHover ? "bg-primary" : "bg-black"}`}
            />
            {tagText}
            <div
              className={`h-2px w-full ${isHover ? "bg-primary" : "bg-black"}`}
            />
          </div>
        </div>

        <div className="flex gap-2 linear duration-500">
          {isHover && <span className="text-xs">자세히 보기</span>}
          <span className="text-lg">
            <RxEnter />
          </span>
        </div>
      </div>
      <div className="relative rounded-md overflow-hidden w-1/2 h-full">
        <Image
          className={isHover ? "scale-105 ease-in-out duration-200" : ""}
          src={isSpineProject ? spineThumnail[0] : thumnailImage[0]}
          alt="thumnail image"
          objectFit="cover"
          fill
        />
      </div>
    </article>
  );
};

export default GalleryCard;
