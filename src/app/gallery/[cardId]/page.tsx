"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";

import cards from "../../../../models/card.json";
import type { Card } from "../../../../types";
import SpineProjectView from "./components/SpineProjectView";

const IMAGE_BASE_PATH = "/images";

export default function GalleryDetail({
  params,
}: {
  params: { cardId: string };
}) {
  const [openViewer, setOpenViewer] = useState(false);
  const [viewerGuide, setViewViewerGuide] = useState(false);

  const cardList = cards as Card[];

  const currentCard = useMemo(
    () => (cardList ?? []).find((card) => card.id === Number(params.cardId)),
    [cardList, params]
  );

  const titles =
    typeof currentCard?.title === "string"
      ? [currentCard?.title]
      : currentCard?.title ?? [];

  const tags = currentCard?.tags ?? [];

  const previewImage =
    typeof currentCard?.images?.normal === "string"
      ? [IMAGE_BASE_PATH + currentCard?.images.normal ?? ""]
      : currentCard?.images?.normal.map(
          (imagePath) => IMAGE_BASE_PATH + imagePath
        ) ?? [];

  const detailImage =
    typeof currentCard?.images?.full === "string"
      ? [{ src: IMAGE_BASE_PATH + currentCard?.images.full ?? "" }]
      : currentCard?.images?.full.map((imagePath) => ({
          src: IMAGE_BASE_PATH + imagePath,
        })) ?? [];

  const isSpineProject = currentCard?.id === 6;

  if (!currentCard) return null;

  if (isSpineProject) return <SpineProjectView spineCard={currentCard} />;

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

            {previewImage.map((image, index) => (
              <>
                <Image
                  key={image}
                  src={previewImage[index]}
                  objectFit="cover"
                  width={1280}
                  height={720}
                  alt={"preview image" + "_" + index}
                />
                <div className="w-full h-px bg-black" />
              </>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 px-6">
          <div className="flex flex-col">
            <h1 className="text-6xl">{titles[1]}</h1>
            <h5 className="pl-1 text-primary text-xl">{titles[0]}</h5>
          </div>

          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                className="px-3 py-1 rounded-full border-primary border-2 border-solid text-gray-600"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-gray-500 whitespace-pre-line" lang="ko">
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
