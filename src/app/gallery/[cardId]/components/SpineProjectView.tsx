import Image from "next/image";

import TextTransition, { presets } from "react-text-transition";

import type { Card } from "../../../../../types";

type SpineProjectViewProps = {
  spineCard: Card;
};

const SPINE_IMAGE_BASE_PATH = "/images/spine";

const SpineProjectView = ({ spineCard }: SpineProjectViewProps) => {
  const titles =
    typeof spineCard?.title === "string"
      ? [spineCard?.title]
      : spineCard?.title ?? [];

  const tags = spineCard?.tags ?? [];

  const spineModelKeys = Object.keys(
    spineCard?.spineImages as Record<string, string[]>
  );

  const getFirstLetterUpperCase = (text: string) => {
    return text[0].toUpperCase() + text.slice(1);
  };

  return (
    <main className="flex flex-1 flex-col gap-8 w-full border-y border-solid border-black min-h-full pb-6">
      <div className="flex flex-col gap-10 px-6 py-6">
        <div className="flex items-end">
          <div className="flex flex-col">
            <h1 className="text-6xl">{titles[1]}</h1>
          </div>
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
          {spineCard?.description ?? ""}
        </p>
      </div>

      <div>
        <div className="w-full h-px bg-black" />

        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-60 p-10">
            {spineModelKeys.map((model) => (
              <div key={model}>
                <div>
                  <h2 className="text-gray-900 font-semibold text-xl">
                    {getFirstLetterUpperCase(model)}
                  </h2>
                  <div className="border-b-2 border-primary border-solid" />
                </div>
                <ul className="flex items-end justify-between h-max">
                  {spineCard?.spineImages?.[model]?.map((image, index) => (
                    <li
                      key={model + "_" + index}
                      className="flex flex-col items-end justify-end h-full"
                    >
                      <img
                        src={SPINE_IMAGE_BASE_PATH + "/" + model + image}
                        alt="spine image"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpineProjectView;
