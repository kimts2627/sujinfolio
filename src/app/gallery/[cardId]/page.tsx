"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";

import TextTransition, { presets } from "react-text-transition";

import NextJsImage from "./components/NextJsImage";

import demoImage from "public/images/heavy.jpeg";

export default function GalleryDetail() {
  const [openViewer, setOpenViewer] = useState(false);
  const [viewerGuide, setViewViewerGuide] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const demoTitles = ["까마귀와 두루미", "Raven and Crane"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((titleIndex) => titleIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

            <Image src={demoImage} alt="demo image" />
          </div>
          <div className="w-full h-px bg-black" />
        </div>

        <div className="flex flex-col gap-10 px-6">
          <div className="flex items-end">
            <h1 className="text-6xl">
              <TextTransition springConfig={presets.wobbly}>
                {demoTitles[titleIndex % demoTitles.length]}
              </TextTransition>
            </h1>
            {/* <div className="flex-1 border-solid border-b-2 h-full w-full border-primary" /> */}
          </div>
          <p className="text-lg text-gray-500" lang="ko">
            법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은
            헌법재판소에 제청하여 그 심판에 의하여 재판한다. 국가는 모성의
            보호를 위하여 노력하여야 한다. 국민의 자유와 권리는 헌법에 열거되지
            아니한 이유로 경시되지 아니한다. 모든 국민은 자기의 행위가 아닌
            친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 의원을
            제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
            헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차,
            내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 대법관은
            대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다.
            언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지
            아니한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는
            파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타
            불리한 처분을 받지 아니한다.
          </p>
        </div>
      </main>

      <Lightbox
        open={openViewer}
        close={() => setOpenViewer(false)}
        slides={[demoImage]}
        render={{ slide: NextJsImage }}
        plugins={[Zoom, Download]}
      />
    </>
  );
}
