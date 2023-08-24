"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";

import TextTransition, { presets } from "react-text-transition";

import cards from "../../../../models/card.json";
import type { Card } from "../../../../types";

const IMAGE_BASE_PATH = "/images";

export default function GalleryDetail({
  params,
}: {
  params: { cardId: string };
}) {
  const [openViewer, setOpenViewer] = useState(false);
  const [viewerGuide, setViewViewerGuide] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const cardList = cards as Card[];

  const currentCard = useMemo(
    () => (cardList ?? []).find((card) => card.id === Number(params.cardId)),
    [cardList, params]
  );

  const titles =
    typeof currentCard?.title === "string"
      ? [currentCard?.title]
      : currentCard?.title ?? [];

  const detailImage = [
    { src: IMAGE_BASE_PATH + currentCard?.images.full ?? "" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((titleIndex) => titleIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!currentCard) return null;

  return (
    <>
      <main className="flex flex-1 flex-col gap-8 w-full border-y border-solid border-black min-h-full pb-6">
        <div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setViewViewerGuide(true)}
            onMouseLeave={() => setViewViewerGuide(false)}
            onClick={() => setOpenViewer(true)}
          >
            <div
              className={`absolute flex items-center justify-center w-full h-full bg-gray-700 ${
                viewerGuide ? "opacity-70" : "opacity-0"
              } ease-in-out duration-300`}
            >
              <h2 className="text-white text-2xl font-extralight">
                자세히 보기
              </h2>
            </div>

            <Image
              src={IMAGE_BASE_PATH + currentCard?.images.normal ?? ""}
              objectFit="cover"
              width={1280}
              height={720}
              alt="preview image"
            />
          </div>
          <div className="w-full h-px bg-black" />
        </div>

        <div className="flex flex-col gap-10 px-6">
          <div className="flex items-end">
            <h1 className="text-6xl">
              <TextTransition springConfig={presets.wobbly}>
                {titles[titleIndex % titles.length]}
              </TextTransition>
            </h1>
          </div>
          <p className="text-lg text-gray-500" lang="ko">
            {currentCard?.description ?? ""}
          </p>
        </div>
      </main>

      <Lightbox
        open={openViewer}
        close={() => setOpenViewer(false)}
        slides={detailImage}
        // render={{ slide: NextJsImage }}
        plugins={[Zoom, Download]}
      />
    </>
  );
}
